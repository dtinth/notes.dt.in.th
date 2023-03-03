import { GetServerSideProps } from "next"
import {
  fetchPrivateNote,
  getServerSidePropsForFetchedNote,
} from "../../src/packlets/notes-io"
import { NotePage } from "../../src/packlets/notes-page"

export const getServerSideProps: GetServerSideProps<NotePage> = async (
  context
) => {
  const key = context.params!.key as string
  const token = context.req.cookies["notes_id_token"]
  const fetchedNote = await fetchPrivateNote(key, token)
  return getServerSidePropsForFetchedNote(context, fetchedNote)
}

export default NotePage
