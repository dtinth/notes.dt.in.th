import type { NextApiRequest, NextApiResponse } from "next"
import { fetchPublicFile } from "../../src/packlets/notes-io"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetchPublicFile("index.txt")
    if (!response.ok) {
      throw new Error(`Unable to fetch sitemap: ${response.status}`)
    }
    res.setHeader("Content-Type", "text/plain")
    res.send(await response.text())
  } catch (error) {
    console.error(error)
    res.status(500).send("Error")
  }
}
