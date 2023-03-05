import { parseFrontmatter } from "@vuepress/shared-utils"
import md from "@vuepress/markdown"
import twemoji from "twemoji"

const markdown = md()

function installPlugins(markdown: import("markdown-it")) {
  markdown.use(require("markdown-it-footnote"))
  markdown.renderer.render = ((original) =>
    function (this: typeof markdown) {
      return twemoji.parse(original.apply(this, arguments as any))
    })(markdown.renderer.render)

  markdown.use((markdown) => {
    markdown.renderer.rules.link_open = ((original) =>
      function (tokens, idx, options, env, self) {
        const token = tokens[idx]
        const nextToken = tokens[idx + 1]
        if (nextToken && nextToken.type === "text") {
          if (String(nextToken.content).startsWith("🔖")) {
            // https://github.com/aaronpk/webmention.io/blob/main/test/data/source.example.org/bookmark-of.html
            token.attrPush(["class", "u-bookmark-of"])
          }
        }
        token.tag = "notes-link"
        if (token.markup === "autolink") {
          token.attrPush(["data-autolink", "true"])
        }
        return original!(tokens, idx, options, env, self)
      })(markdown.renderer.rules.link_open)

    markdown.renderer.rules.link_close = ((original) =>
      function (tokens, idx, options, env, self) {
        const token = tokens[idx]
        token.tag = "notes-link"
        return original!(tokens, idx, options, env, self)
      })(markdown.renderer.rules.link_close)
  })
}

installPlugins(markdown)

export interface ParseNoteOptions {
  path: string
}
export interface ParseNoteResult {
  html: string
  hoistedTags: string[]
  frontmatter: any
}

export async function parseNote(
  src: string,
  options: ParseNoteOptions
): Promise<ParseNoteResult> {
  const parseResult = parseFrontmatter(src)
  let frontmatter = parseResult.data
  let content = parseResult.content
  const {
    html,
    data: { hoistedTags },
  } = markdown.render(content, {
    frontmatter,
    relativePath: options.path,
  })
  return {
    frontmatter,
    html,
    hoistedTags,
  }
}
