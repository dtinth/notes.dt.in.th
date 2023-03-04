import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { FC, MouseEventHandler, useCallback, useEffect, useRef } from "react"
import { setupFootnotes } from "../footnotes"
import { NoteFooter } from "../notes"
import { VueApp } from "../vue-app-react"
import { useAuthState } from "../auth/useAuthState"
import { useQuery } from "@tanstack/react-query"
import { isQueryFlagEnabled } from "query-flags"
import redaxios from "redaxios"
import { useNoteFileContentsQueryAndMutation } from "../notes-queries"

export interface NotePage {
  slug: string
  hash: string | null
  noteContents: VueApp
  noteFooter: NoteFooter
  title: string
  description?: string
  wide: boolean
  ogImageUrl: string | null
  synchronize?: { id: string } | null
}

const NEXT_LINK_ENABLED = false

export const NotePage: NextPage<NotePage> = (props) => {
  const latest = useLatestNote(props.synchronize?.id)
  const combinedProps = { ...props, ...(latest.props || {}) }
  return (
    <>
      <NotePageInner {...combinedProps} key={combinedProps.hash} />
      {!!props.synchronize && <NoteEditor id={props.synchronize.id} />}
    </>
  )
}

function useLatestNote(id?: string) {
  const authState = useAuthState()
  const query = useQuery({
    enabled: !!id && !!authState?.user,
    queryKey: ["latestNote", authState?.user?.uid, id],
    queryFn: async () => {
      const user = authState?.user
      if (!user) {
        return null
      }

      const idToken = await user.getIdToken()
      if (isQueryFlagEnabled("mock")) {
        return null
      }

      const url = `/api/private/` + id
      const { data } = await redaxios.get(url, {
        headers: { authorization: `Bearer ${idToken}` },
      })
      return data
    },
  })
  return {
    props: query.data?.props,
  }
}

const NotePageInner: NextPage<NotePage> = (props) => {
  const router = useRouter()
  const div = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (div.current) setupFootnotes()
  }, [])
  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (!NEXT_LINK_ENABLED) {
        return
      }
      const a = (e.target as Element).closest?.("a")
      if (!a) {
        return
      }
      if (a.target && a.target !== "_self") {
        return
      }
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.nativeEvent?.which === 2
      ) {
        return
      }
      if (a.origin !== window.location.origin) {
        return
      }
      e.preventDefault()
      router.push(a.href.slice(a.origin.length))
    },
    [router]
  )
  return (
    <>
      <article className="h-entry" key={props.slug}>
        <Head>
          <title>{props.title} | notes.dt.in.th</title>
          {!!props.description && (
            <>
              <meta name="description" content={props.description} />
            </>
          )}
          <meta property="og:title" content={props.title} />
          {!!props.ogImageUrl && (
            <>
              <meta property="og:image" content={props.ogImageUrl} />
              <meta property="og:image:width" content="1800" />
              <meta property="og:image:height" content="1680" />
            </>
          )}
        </Head>
        {props.wide && <WidePage />}
        <div ref={div} onClick={onClick}>
          <VueApp {...props.noteContents} />
        </div>
        <NoteFooter {...props.noteFooter} />
      </article>
    </>
  )
}

const wideClassName = "is-wide"
const WidePage: FC = () => {
  const script = `document.body.classList.add("${wideClassName}")`
  useEffect(() => {
    document.body.classList.add(wideClassName)
    return () => document.body.classList.remove(wideClassName)
  }, [])
  return <script dangerouslySetInnerHTML={{ __html: script }}></script>
}

export interface NoteEditor {
  id: string
}

export const NoteEditor: FC<NoteEditor> = (props) => {
  const { query, mutation } = useNoteFileContentsQueryAndMutation(props.id)
  const data = query.data
  if (query.isLoading) {
    return (
      <details>
        <summary>Edit this note</summary>
        <p>Loading…</p>
      </details>
    )
  }
  if (!data) {
    return (
      <details>
        <summary>Edit this note</summary>
        <p>[No data, something is wrong!]</p>
      </details>
    )
  }
  return (
    <details>
      <summary>Edit this note</summary>
      <form
        onSubmit={(e) => (
          e.preventDefault(),
          mutation.mutate(
            (e.currentTarget.elements.namedItem("contents") as HTMLInputElement)
              .value
          )
        )}
      >
        <textarea
          name="contents"
          data-hash={data.hash}
          key={data.hash}
          defaultValue={data.contents}
          style={{
            fontFamily: "var(--font-mono)",
            lineHeight: "1.4",
            height: "32em",
          }}
        />
        <button type="submit" disabled={mutation.isLoading}>
          Save changes
        </button>{" "}
        {mutation.status}
      </form>
    </details>
  )
}
