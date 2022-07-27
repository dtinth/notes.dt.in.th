import { GetServerSideProps } from "next";
import {
  fetchPrivateNote,
  getServerSidePropsForFetchedNote,
} from "../../src/packlets/notes-io";
import { NotePage } from "../../src/packlets/notes-page";

export const getServerSideProps: GetServerSideProps<NotePage> = async (
  context
) => {
  const jwt = context.params!.jwt as string;
  const fetchedNote = await fetchPrivateNote(jwt);
  return getServerSidePropsForFetchedNote(context, fetchedNote);
};

export default NotePage;
