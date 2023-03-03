import { FC, ReactNode } from "react"
import { useNoteInfoQuery } from "../notes-queries"

export interface EditConnector {
  slug: string
  children: (url: string) => ReactNode
}

export const EditConnector: FC<EditConnector> = (props) => {
  const infoQuery = useNoteInfoQuery(props.slug)
  if (!infoQuery.data) {
    return <></>
  }
  return <>{props.children(infoQuery.data.editUrl)}</>
}
