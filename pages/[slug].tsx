import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next"
import {
  fetchPublicNote,
  getServerSidePropsForFetchedNote,
} from "../src/packlets/notes-io"
import { NotePage } from "../src/packlets/notes-page"

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "HomePage" } }, { params: { slug: "Recent" } }],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<NotePage> = async (context) => {
  const slug = context.params!.slug as string
  const fetchedNote = await fetchPublicNote(slug)
  return getServerSidePropsForFetchedNote(
    context,
    fetchedNote
  ) as unknown as GetStaticPropsResult<NotePage>
}

export default NotePage
