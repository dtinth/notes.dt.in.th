import { useLayoutEffect, useRef } from "react"
import * as svelteInternal from "svelte/internal"

export interface SvelteApp {
  renderer: "svelte"
  js: Record<string, string>
  css: string
  html: string
}

function compileSvelteComponents(js: Record<string, string>) {
  const vars: Record<string, any> = {}
  for (const [name, code] of Object.entries(js)) {
    vars[name] = compileAndExecuteModule(code, vars)
  }
  return vars
}

function compileAndExecuteModule(code: string, vars: Record<string, any> = {}) {
  const entries = Object.entries(vars)
  const keys = entries.map(([key]) => key)
  const values = entries.map(([_, value]) => value)
  const fn = new Function("module", "exports", "require", ...keys, code)
  const myModule = { exports: {} as any }
  const childRequire = (specifier: string) => {
    if (specifier === "svelte/internal") return svelteInternal
    throw new Error('Unsupported require("' + specifier + '")')
  }
  fn(myModule, myModule.exports, childRequire, ...values)
  return myModule.exports.default
}

export const SvelteApp = ({ js, css, html }: SvelteApp) => {
  const domRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (!domRef.current) return
    const SvelteComponents = compileSvelteComponents(js)
    const app = new SvelteComponents.NoteRenderer({
      target: domRef.current,
      hydrate: true,
    })
    return () => {
      app.$destroy()
    }
  }, [js])
  return (
    <>
      <style>{css}</style>
      <div
        data-svelte-root
        ref={domRef}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
