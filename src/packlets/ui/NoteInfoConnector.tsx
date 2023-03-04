import { FC, ReactNode } from "react"
import { useNoteInfoQuery } from "../notes-queries"

export interface NoteInfoConnector {
  slug: string
  children: (info: {
    editUrl: string
    privateToken: string
    vscodeDevUrl: string
  }) => ReactNode
}

export const NoteInfoConnector: FC<NoteInfoConnector> = (props) => {
  const infoQuery = useNoteInfoQuery(props.slug)
  if (!infoQuery.data) {
    return <></>
  }
  return <>{props.children(infoQuery.data)}</>
}
