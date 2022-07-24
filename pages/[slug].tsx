import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, MouseEventHandler, useCallback, useEffect, useRef } from "react";
import { setupFootnotes } from "../src/packlets/footnotes";
import { parseNote } from "../src/packlets/markdown";
import { NoteFooter, SyndicationItem } from "../src/packlets/notes";
import { fetchNote } from "../src/packlets/notes-io";
import { compileVueApp } from "../src/packlets/vue-app-compiler";
import { VueApp } from "../src/packlets/vue-app-react";

export const getServerSideProps: GetServerSideProps<NotePage> = async (
  context
) => {
  const slug = context.params!.slug as string;
  const fetchedNote = await fetchNote(slug);
  if (!fetchedNote) {
    return {
      notFound: true,
    };
  }
  const parsedNote = await parseNote(fetchedNote.source, {
    path: `${slug}.md`,
  });
  const frontmatter = parsedNote.frontmatter;
  const allowedToView = fetchedNote.preview || frontmatter.public;
  if (!allowedToView) {
    return {
      notFound: true,
    };
  }

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
      noteFooter: {
        pubDate: pubDate(slug),
        syndication: syndication(frontmatter),
      },
    },
  };
};

interface NotePage {
  noteContents: VueApp;
  noteFooter: NoteFooter;
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
        <title>{props.title} | notes.dt.in.th</title>
      </Head>
      {props.wide && <WidePage />}
      <div ref={div} onClick={onClick}>
        <VueApp {...props.noteContents} />
      </div>
      <NoteFooter {...props.noteFooter} />
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

function pubDate(slug: string) {
  const regex = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/;
  const match = slug.match(regex);
  if (!match) {
    return null;
  }
  const date = new Date(
    `${match[1]}-${match[2]}-${match[3]}T${match[4]}:${match[5]}:${match[6]}Z`
  );
  return {
    machine: date.toJSON(),
    human: new Date(date.getTime() + 7 * 3600e3)
      .toUTCString()
      .split(" ")
      .slice(0, 4)
      .join(" "),
  };
}

function syndication(frontmatter: any): SyndicationItem[] {
  return [
    {
      url: frontmatter.facebook,
      title: "Facebook",
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      url: frontmatter.devto,
      title: "DEV Community",
      path: "M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z",
    },
    {
      url: frontmatter.twitter,
      title: "Twitter",
      path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    },
    {
      url: frontmatter.reddit,
      title: "Reddit",
      path: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z",
    },
  ].filter((x) => x.url);
}
