import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, MouseEventHandler, useCallback, useEffect, useRef } from "react";
import { setupFootnotes } from "../src/packlets/footnotes";
import { parseNote } from "../src/packlets/markdown";
import { fetchNote } from "../src/packlets/notes-io";
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
  const hoistedTags = parsedNote.hoistedTags || [];
  const script = hoistedTags.find((tag) => tag.match(/^<script/i));
  const styles = hoistedTags.filter((tag) => tag.match(/^<style/i)).join("");
  const template = `<div class="e-content">${styles}${parsedNote.html}</div>`;
  return {
    props: {
      noteContents: await compileVueApp(
        template,
        script ? stripScriptTag(script) : undefined
      ),
      title: frontmatter.title || slug,
      wide: !!frontmatter.wide,
    },
  };
};

interface NotePage {
  noteContents: VueApp;
  title: string;
  wide: boolean;
}

const NEXT_LINK_ENABLED = false;

const NotePage: NextPage<NotePage> = (props) => {
  const router = useRouter();
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (div.current) setupFootnotes();
  }, []);
  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (!NEXT_LINK_ENABLED) {
        return;
      }
      const a = (e.target as Element).closest?.("a");
      if (!a) {
        return;
      }
      if (a.target && a.target !== "_self") {
        return;
      }
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.nativeEvent?.which === 2
      ) {
        return;
      }
      if (a.origin !== window.location.origin) {
        return;
      }
      e.preventDefault();
      router.push(a.href.slice(a.origin.length));
    },
    [router]
  );
  return (
    <article className="h-entry">
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.wide && <WidePage />}
      <div ref={div} onClick={onClick}>
        <VueApp {...props.noteContents} />
      </div>
    </article>
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
