// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { parseFrontmatter } from "@vuepress/shared-utils";
import { fetchPublicNote } from "../../src/packlets/notes-io";
import RSS from "rss";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const fetchedNote = await fetchPublicNote("20220130T173123Z7835");
    if (!fetchedNote) {
      throw new Error("Note not found");
    }
    const parseResult = parseFrontmatter(fetchedNote.source);
    let content = parseResult.content;
    const feed = new RSS({
      title: "dtinth",
      description: "Thai Pangsakulyanont’s writings",
      feed_url: "https://notes.dt.in.th/api/recent.xml",
      site_url: "https://dt.in.th",
    });
    for (const m of content.matchAll(
      /^- (\d\d\d\d-\d\d-\d\d): \[(.*?)\]\(([^)\s]+)\)/gm
    )) {
      const url = new URL(m[3], "https://notes.dt.in.th/").toString();
      const options = {
        title: m[2],
        description: `<a href="${url}">[Read]</a>`,
        url: url,
        date: new Date(m[1] + "T00:00:00Z"),
      };
      feed.item(options);
    }
    res.setHeader("Content-Type", "text/xml");
    res.send(feed.xml());
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
}
