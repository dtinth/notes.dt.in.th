import { compile } from "svelte/compiler"
import * as esbuild from "esbuild"
import type { SvelteApp } from "../svelte-app-react"
import { createRequire } from "node:module"

// async function compileVueTemplate(
//   html: string,
//   script?: string
// ): Promise<VueComponentBasis> {
//   const template = html
//   const result = VueTemplateCompiler.compile(template)
//   let componentModule: string | null = null
//   if (script) {
//     const compiled = await esbuild.transform(script, {
//       loader: "ts",
//       format: "cjs",
//     })
//     componentModule = compiled.code
//   }
//   return {
//     render: result.render,
//     staticRenderFns: result.staticRenderFns,
//     componentModule,
//   }
// }

export async function compileSvelteApp(
  template: string,
  script?: string
): Promise<SvelteApp> {
  const clientResult = compile((script || "") + template, {
    format: "cjs",
    generate: "dom",
    hydratable: true,
  })
  const serverResult = compile((script || "") + template, {
    format: "cjs",
    generate: "ssr",
    hydratable: true,
  })
  const ssrModule = compileAndExecuteModule(serverResult.js.code)
  console.log("============================>", ssrModule.render())
  return { renderer: "svelte" }
}

function compileAndExecuteModule(code: string) {
  const fn = new Function("module", "exports", "require", code)
  const myModule = { exports: {} as any }
  const childRequire = createRequire(__filename)
  fn(myModule, myModule.exports, childRequire)
  return myModule.exports.default
}
