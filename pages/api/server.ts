import type { NextApiRequest, NextApiResponse } from "next"
import { authenticateFirebase } from "../../src/packlets/auth-server"
import { getNotesApiBase } from "../../src/packlets/notes-io"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await authenticateFirebase(req)
    const baseUrl = getNotesApiBase()
    res.json({ baseUrl })
  } catch (error) {
    console.error(error)
    res.status(500).send("Error")
  }
}
