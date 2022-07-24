import type { GetServerSideProps, NextPage } from "next";
import { FC, useEffect, useRef } from "react";
import { setupFootnotes } from "../src/packlets/footnotes";
import { parseNote } from "../src/packlets/markdown";
import { fetchNote } from "../src/packlets/notes";
import { compileVueApp } from "../src/packlets/vue-app-compiler";
import { VueApp } from "../src/packlets/vue-app-react";

export const getServerSideProps: GetServerSideProps<NotePage> = async (
  context
) => {
  const slug = context.params!.slug as string;
  const noteData = await fetchNote(slug);
  const parsedNote = await parseNote(noteData.source, {
    path: `${slug}.md`,
  });
  const frontmatter = parsedNote.frontmatter;
  const script = parsedNote.hoistedTags.find((tag) => tag.match(/^<script/i));
  const styles = parsedNote.hoistedTags
    .filter((tag) => tag.match(/^<style/i))
    .join("");
  const template = `<div class="e-content">${styles}${parsedNote.html}</div>`;
  return {
    props: {
      noteContents: await compileVueApp(
        template,
        script ? stripScriptTag(script) : undefined
      ),
      wide: !!frontmatter.wide,
    },
  };
};

interface NotePage {
  noteContents: VueApp;
  wide: boolean;
}

const NotePage: NextPage<NotePage> = (props) => {
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (div.current) setupFootnotes();
  }, []);
  return (
    <div ref={div}>
      {props.wide && <WidePage />}
      <VueApp {...props.noteContents} />
    </div>
  );
};

const wideClassName = "is-wide";
const WidePage: FC = () => {
  const script = `document.body.classList.add("${wideClassName}")`;
  useEffect(() => {
    document.body.classList.add(wideClassName);
    return () => document.body.classList.remove(wideClassName);
  }, []);
  return <script dangerouslySetInnerHTML={{ __html: script }}></script>;
};

export default NotePage;

function stripScriptTag(html: string) {
  return html
    .trim()
    .replace(/^<script[^>]*>/i, "")
    .replace(/<\/script>/i, "");
}
