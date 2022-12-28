import { useQuery } from "@tanstack/react-query"
import { FC, ReactNode } from "react"
import { SignedInOnly, AuthUser } from "../auth"
import redaxios from "redaxios"
import { isQueryFlagEnabled } from "query-flags"

export interface EditConnector {
  slug: string
  children: (url: string) => ReactNode
}

export const EditConnector: FC<EditConnector> = (props) => {
  return (
    <SignedInOnly>
      {(user) => <EditConnectorContent user={user} {...props} />}
    </SignedInOnly>
  )
}

export interface EditConnectorContent extends EditConnector {
  user: AuthUser
}

export const EditConnectorContent: FC<EditConnectorContent> = (props) => {
  const infoQuery = useNoteInfoQuery(props.user, props.slug)
  if (!infoQuery.data) {
    return <></>
  }
  return <>{props.children(infoQuery.data.editUrl)}</>
}

function useNoteInfoQuery(user: AuthUser, slug: string) {
  return useQuery({
    queryKey: ["info", slug],
    queryFn: async () => {
      const idToken = await user.getIdToken()
      const baseUrl = await getBaseUrl(idToken)

      if (isQueryFlagEnabled("mock")) {
        return { editUrl: "https://example.org" }
      }

      const url = `${baseUrl}/v2/info?${new URLSearchParams({
        slug: slug,
      })}`
      const { data } = await redaxios.get(url, {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      })
      return data
    },
  })
}

async function getBaseUrl(idToken: string) {
  if (isQueryFlagEnabled("mock")) {
    return "https://mock.notes.dt.in.th"
  }

  if (sessionStorage.notesBaseUrl) {
    return sessionStorage.notesBaseUrl
  }
  const { data } = await redaxios.get("/api/server", {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  })
  const baseUrl = data.baseUrl
  sessionStorage.notesBaseUrl = baseUrl
  return baseUrl
}
