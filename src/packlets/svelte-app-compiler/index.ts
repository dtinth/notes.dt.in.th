import { compile } from "svelte/compiler"
import * as esbuild from "esbuild"
import type { SvelteApp } from "../svelte-app-react"
import { createRequire } from "node:module"
import { readFileSync } from "node:fs"

const OutboundLink = readFileSync(
  "src/packlets/svelte-runtime/OutboundLink.svelte",
  "utf8"
)
const NotesLink = `<a {...$$props}><slot /></a>`

class SvelteRenderer {
  private vars: Record<string, any> = {}
  private js: Record<string, string> = {}
  private css: Record<string, string> = {}
  addComponent(name: string, source: string) {
    const clientResult = compile(source, {
      format: "cjs",
      generate: "dom",
      hydratable: true,
      css: "external",
    })
    const serverResult = compile(source, {
      format: "cjs",
      generate: "ssr",
      hydratable: true,
      css: "external",
    })
    const Component = compileAndExecuteModule(serverResult.js.code, this.vars)
    this.vars[name] = Component
    this.js[name] = clientResult.js.code
    this.css[name] = clientResult.css.code
    return Component
  }
  compile(source: string) {
    const NoteRenderer = this.addComponent("NoteRenderer", source)
    const rendered = NoteRenderer.render()
    const result = {
      html: rendered.html,
      js: this.js,
      css: Object.values(this.css).filter(Boolean).join("\n\n"),
    }
    return result
  }
}

export async function compileSvelteApp(
  template: string,
  script?: string
): Promise<SvelteApp> {
  const renderer = new SvelteRenderer()
  renderer.addComponent("OutboundLink", OutboundLink)
  renderer.addComponent("NotesLink", NotesLink)
  const result = renderer.compile(
    ((script || "") + template).replace(/<(\/?)notes-link\b/g, "<$1NotesLink")
  )
  return {
    renderer: "svelte",
    html: result.html,
    js: result.js,
    css: result.css,
  }
}

function compileAndExecuteModule(code: string, vars: Record<string, any> = {}) {
  const entries = Object.entries(vars)
  const keys = entries.map(([key]) => key)
  const values = entries.map(([_, value]) => value)
  const fn = new Function("module", "exports", "require", ...keys, code)
  const myModule = { exports: {} as any }
  const childRequire = createRequire(__filename)
  fn(myModule, myModule.exports, childRequire, ...values)
  return myModule.exports.default
}
