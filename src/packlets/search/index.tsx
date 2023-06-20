import {
  FC,
  KeyboardEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useQuery } from "@tanstack/react-query"
import { createSearchEngineFromJson } from "./engine"
import { registerCommand } from "../commands"
import { Icon } from "react-iconify-icon-wrapper"
import closeIcon from "@iconify-icons/codicon/close"

const NoteSearcher: FC = (props) => {
  return <NoteSearcherDialog />
}

export default NoteSearcher

const NoteSearcherDialog: FC = (props) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const searchInput = useRef<HTMLInputElement>(null)
  const [searchText, setSearchText] = useState("")
  const [enabled, setEnabled] = useState(false)
  function showSearch() {
    dialogRef.current?.showModal()
    searchInput.current?.focus()
    setEnabled(true)
  }
  function hideSearch() {
    dialogRef.current?.close()
  }
  useEffect(() => {
    const listener = (e: KeyboardEvent): void => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        showSearch()
      }
    }
    addEventListener("keydown", listener)
    registerCommand("search", { run: showSearch })
    return () => {
      removeEventListener("keydown", listener)
    }
  }, [])
  const searchIndex = useQuery(
    ["searchIndex"],
    async () => {
      return fetch(
        "https://htrqhjrmmqrqaccchyne.supabase.co/storage/v1/object/public/notes-public/index.search.json"
      ).then((r) => {
        if (!r.ok) {
          throw new Error(
            `Failed to fetch search index: ${r.status} ${r.statusText}`
          )
        }
        return r.text()
      })
    },
    { enabled }
  )
  const onKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      const link = dialogRef.current?.querySelector("a")
      if (link) {
        link.focus()
        link.click()
      }
    }
  }
  return (
    <>
      <dialog
        ref={dialogRef}
        style={{
          width: "720px",
          maxWidth: "90vw",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
          <input
            type="search"
            ref={searchInput}
            value={searchText}
            onKeyDown={onKeyDown}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              flex: "1 1 0",
              width: "100%",
              boxSizing: "border-box",
            }}
            placeholder="Search for a note…"
          />
          <button
            style={{ paddingLeft: 10, paddingRight: 10 }}
            onClick={hideSearch}
            title="Close search"
          >
            <Icon icon={closeIcon} />
          </button>
        </div>
        <div style={{ height: "400px", overflow: "auto" }}>
          {searchIndex.isError ? (
            `Error: ${searchIndex.error}`
          ) : searchIndex.isLoading ? (
            `Loading…`
          ) : (
            <SearchResult index={searchIndex.data} text={searchText} />
          )}
        </div>
      </dialog>
    </>
  )
}

interface SearchResult {
  index: any
  text: string
}

const SearchResult: FC<SearchResult> = (props) => {
  const searchEngine = useMemo(() => {
    return createSearchEngineFromJson(props.index)
  }, [props.index])
  const searchResult = useMemo(() => {
    return searchEngine.search(props.text)
  }, [searchEngine, props.text])
  return (
    <>
      <ul>
        {searchResult.map((s) => {
          return (
            <li key={s.id}>
              <a href={"/" + s.id}>{s.title}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
