import {
  FC,
  KeyboardEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { createSearchEngineFromJson } from "./engine";

const queryClient = new QueryClient();

const NoteSearcher: FC = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NoteSearcherDialog />
    </QueryClientProvider>
  );
};

export default NoteSearcher;

const NoteSearcherDialog: FC = (props) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const listener = (e: KeyboardEvent): void => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        dialog.current?.showModal();
        searchInput.current?.focus();
        setEnabled(true);
      }
    };
    addEventListener("keydown", listener);
    return () => {
      removeEventListener("keydown", listener);
    };
  }, []);
  const searchIndex = useQuery(
    ["searchIndex"],
    async () => {
      return fetch("/api/search-index.json").then((r) => {
        if (!r.ok) {
          throw new Error(
            `Failed to fetch search index: ${r.status} ${r.statusText}`
          );
        }
        return r.text();
      });
    },
    { enabled }
  );
  const onKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      const link = dialog.current?.querySelector("a");
      if (link) {
        link.focus();
        link.click();
      }
    }
  };
  return (
    <>
      <dialog
        ref={dialog}
        style={{
          width: "720px",
          maxWidth: "90vw",
          overflow: "hidden",
        }}
      >
        <input
          type="search"
          ref={searchInput}
          value={searchText}
          onKeyDown={onKeyDown}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", marginTop: "16px" }}
          placeholder="Search for a note…"
        />
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
  );
};

interface SearchResult {
  index: any;
  text: string;
}

const SearchResult: FC<SearchResult> = (props) => {
  const searchEngine = useMemo(() => {
    return createSearchEngineFromJson(props.index);
  }, [props.index]);
  const searchResult = useMemo(() => {
    return searchEngine.search(props.text);
  }, [searchEngine, props.text]);
  return (
    <>
      <ul>
        {searchResult.map((s) => {
          return (
            <li>
              <a href={"/" + s.id}>{s.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
