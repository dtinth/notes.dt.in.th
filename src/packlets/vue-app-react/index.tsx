import { FC, useEffect, useRef } from "react";
import Vue from "vue/dist/vue.runtime.js";

export interface VueComponentBasis {
  render: string;
  staticRenderFns: string[];
  componentModule: string | null;
}

export interface VueApp {
  basis: VueComponentBasis;
  html: string;
}

function compileAndExecuteModule(code: string) {
  const fn = new Function("module", "exports", "Vue", code);
  const myModule = { exports: {} as any };
  fn(myModule, myModule.exports, Vue);
  return myModule.exports.default;
}

export function createVueComponentOptions(basis: VueComponentBasis) {
  const component = {
    components: {},
  };
  // Object.assign(component.components, { OutboundLink, DSplit, NotesLink })
  if (basis.componentModule) {
    Object.assign(component, compileAndExecuteModule(basis.componentModule));
  }
  Object.assign(component, {
    render: new Function(basis.render),
    staticRenderFns: basis.staticRenderFns.map((f) => new Function(f)),
  });
  return component;
}

export const VueApp = ({ basis, html }: VueApp) => {
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!domRef.current) return;
    if (!("Vue" in window)) Object.assign(window, { Vue });
    const app = new (Vue as any)(createVueComponentOptions(basis));
    console.log(app);
    app.$mount(domRef.current.firstElementChild!);
  }, [basis]);
  return <div ref={domRef} dangerouslySetInnerHTML={{ __html: html }} />;
};