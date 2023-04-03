import { parseFrontmatter } from "@vuepress/shared-utils"
import md from "@vuepress/markdown"
import twemoji from "twemoji"

const markdown = md()

function installPlugins(markdown: import("markdown-it")) {
  markdown.use(require("markdown-it-footnote"))
  markdown.use(require("markdown-it-directive"))

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

  markdown.use((markdown) => {
    const directive =
      (openHtml: string, closeHtml: string) =>
      (
        state: any,
        content: any,
        contentTitle: any,
        inlineContent: any,
        dests: any,
        attrs: any,
        contentStartLine: number,
        contentEndLine: number,
        contentTitleStart: number,
        contentTitleEnd: number,
        inlineContentStart: number,
        inlineContentEnd: number,
        directiveStartLine: number,
        directiveEndLine: number
      ) => {
        const open = state.push("html_block", "", 0)
        open.map = [directiveStartLine, directiveStartLine]
        open.content = openHtml

        const oldMax = state.lineMax
        state.line = contentStartLine
        state.lineMax = contentEndLine
        state.md.block.tokenize(state, contentStartLine, contentEndLine)
        state.lineMax = oldMax

        const close = state.push("html_block", "", 0)
        close.map = [directiveEndLine, directiveEndLine]
        close.content = closeHtml
      }

    const { blockDirectives } = markdown as any
    blockDirectives["lead"] = directive('<div class="lead">', "</div>")
    blockDirectives["split"] = directive("<d-split>", "</d-split>")
    blockDirectives["aside"] = directive('<div slot="right">', "</div>")

    blockDirectives["me"] = directive('<div class="chat-dialog"><div class="chat-dialog-avatar --me"><strong>Me:</strong></div>', "</div>")
    blockDirectives["gpt"] = directive('<div class="chat-dialog"><div class="chat-dialog-avatar --gpt"><strong>GPT:</strong></div>', "</div>")
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
