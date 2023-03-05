import type { NextApiRequest, NextApiResponse } from "next"
import { fetchPublicFile } from "../../src/packlets/notes-io"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetchPublicFile("index.search.json")
    if (!response.ok) {
      throw new Error(`Unable to fetch search index: ${response.status}`)
    }
    res.setHeader("Content-Type", "application/json")
    res.setHeader(
      "Cache-Control",
      "public, max-age=60, s-maxage=60, stale-while-revalidate"
    )
    res.send(await response.text())
  } catch (error) {
    console.error(error)
    res.status(500).send("Error")
  }
}
