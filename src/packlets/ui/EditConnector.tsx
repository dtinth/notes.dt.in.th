import { useQuery } from "@tanstack/react-query"
import { FC, ReactNode } from "react"
import { SignedInOnly, AuthUser } from "../auth"
import redaxios from "redaxios"
import { isQueryFlagEnabled } from "query-flags"
import { useNoteInfoQuery } from "../notes-queries"

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
