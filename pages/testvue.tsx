import type { GetServerSideProps, NextPage } from "next";
import { compileVueApp } from "../src/packlets/vue-app-compiler";
import { VueApp } from "../src/packlets/vue-app-react";

export const getServerSideProps: GetServerSideProps<VueApp> = async () => {
  const template = `
    <h1>{{ hello }}</h1>
    <p>{{ count }}</p>
    <button @click="count++" :disabled="!mounted">++</button>
  `;
  const script = `
    export default {
      setup() {
        const count = Vue.ref(0)
        const mounted = Vue.ref(false)
        Vue.onMounted(() => {
          mounted.value = true
        })
        return { hello: 'Hello, World', count, mounted }
      }
    }
  `;
  return {
    props: await compileVueApp(template, script),
  };
};

const VueAppInNextApp: NextPage<VueApp> = (props) => {
  return (
    <>
      <VueApp {...props} />
    </>
  );
};

export default VueAppInNextApp;
