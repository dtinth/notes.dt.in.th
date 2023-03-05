import { test as base } from "@playwright/test"
import { readFileSync } from "fs"

export const test = base.extend({
  context: async ({ context }, use) => {
    const highlighter = readFileSync(
      require.resolve(
        "@eventpop-oss/interaction-highlighter/dist/interaction-highlighter.umd.cjs"
      )
    )
    await context.addInitScript({
      content: `void (() => {
        const exports = {}
        const module = { exports };
        ${highlighter};
        exports.enableInteractionHighlighter();
      })()`,
    })
    await use(context)
  },
})
