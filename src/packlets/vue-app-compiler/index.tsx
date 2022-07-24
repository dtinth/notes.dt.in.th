import { createVueComponentOptions, VueComponentBasis } from "../vue-app-react";
import * as VueTemplateCompiler from "vue-template-compiler/index.js";
import * as esbuild from "esbuild";
import { createRenderer } from "vue-server-renderer/index.js";
import { Vue } from "../vue-runtime";

async function compileVueTemplate(
  html: string,
  script?: string
): Promise<VueComponentBasis> {
  const template = html;
  const result = VueTemplateCompiler.compile(template);
  let componentModule: string | null = null;
  if (script) {
    const compiled = await esbuild.transform(script, {
      loader: "ts",
      format: "cjs",
    });
    componentModule = compiled.code;
  }
  return {
    render: result.render,
    staticRenderFns: result.staticRenderFns,
    componentModule,
  };
}

export async function compileVueApp(template: string, script?: string) {
  const basis = await compileVueTemplate(template, script);
  const app = new (Vue as any)(createVueComponentOptions(basis));
  const renderer = createRenderer();
  const html = await renderer.renderToString(app);
  return { basis, html };
}
