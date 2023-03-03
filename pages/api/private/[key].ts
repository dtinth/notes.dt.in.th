import { NextApiRequest, NextApiResponse } from "next"
import {
  fetchPrivateNote,
  getServerSidePropsForFetchedNote,
} from "../../../src/packlets/notes-io"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const key = req.query.key as string
    const token = req.headers.authorization?.replace("Bearer ", "")
    const fetchedNote = await fetchPrivateNote(key, token)
    res.json(await getServerSidePropsForFetchedNote({}, fetchedNote))
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
