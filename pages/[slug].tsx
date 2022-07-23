import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useRef } from "react";
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
  const script = parsedNote.hoistedTags.find((tag) => tag.match(/^<script/i));
  const styles = parsedNote.hoistedTags
    .filter((tag) => tag.match(/^<style/i))
    .join("");
  const template = `<div class="e-content">${styles}${parsedNote.html}</div>`;
  return {
    props: await compileVueApp(
      template,
      script ? stripScriptTag(script) : undefined
    ),
  };
};

function stripScriptTag(html: string) {
  return html
    .trim()
    .replace(/^<script[^>]*>/i, "")
    .replace(/<\/script>/i, "");
}

const NotePage: NextPage<VueApp> = (props) => {
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (div.current) setupFootnotes();
  }, []);
  return (
    <div ref={div}>
      <VueApp {...props} />
    </div>
  );
};

let latestLf: { unmount: () => void } | undefined;
async function setupFootnotes() {
  const littlefootPromise = import("littlefoot");
  const { default: littlefoot } = await littlefootPromise;
  if (latestLf) {
    latestLf.unmount();
  }
  latestLf = littlefoot({
    buttonTemplate: `<button
  aria-expanded="false"
  aria-label="Footnote <% number %>"
  class="littlefoot__button"
  id="<% reference %>"
  title="See Footnote <% number %>"
/>
  <% number %>
</button>`,
  });
}

export default NotePage;
