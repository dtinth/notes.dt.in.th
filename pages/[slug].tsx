import type { GetServerSideProps, NextPage } from "next";
import { parseNote } from "../src/packlets/markdown";
import { fetchNote } from "../src/packlets/notes";
import { compileVueApp } from "../src/packlets/vue-app-compiler";
import { VueApp } from "../src/packlets/vue-app-react";

export const getServerSideProps: GetServerSideProps<VueApp> = async (
  context
) => {
  const slug = context.params!.slug as string;
  const noteData = await fetchNote(slug);
  const parsedNote = await parseNote(noteData.source, {
    path: `${slug}.md`,
  });
  console.log(parsedNote);
  const template = `<div class="e-content">${parsedNote.html}</div>`;
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
