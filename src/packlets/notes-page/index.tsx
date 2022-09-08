import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  FC,
  lazy,
  MouseEventHandler,
  Suspense,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { setupFootnotes } from "../footnotes";
import { NoteFooter } from "../notes";
import { VueApp } from "../vue-app-react";

const NoteSearcher = lazy(() => import("../search"));

export interface NotePage {
  noteContents: VueApp;
  noteFooter: NoteFooter;
  title: string;
  description?: string;
  wide: boolean;
  ogImageUrl: string | null;
}

const NEXT_LINK_ENABLED = false;

export const NotePage: NextPage<NotePage> = (props) => {
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
    <>
      <article className="h-entry">
        <Head>
          <title>{props.title} | notes.dt.in.th</title>
          {!!props.description && (
            <>
              <meta name="description" content={props.description} />
            </>
          )}
          <meta property="og:title" content={props.title} />
          {!!props.ogImageUrl && (
            <>
              <meta property="og:image" content={props.ogImageUrl} />
              <meta property="og:image:width" content="1800" />
              <meta property="og:image:height" content="1680" />
            </>
          )}
        </Head>
        {props.wide && <WidePage />}
        <div ref={div} onClick={onClick}>
          <VueApp {...props.noteContents} />
        </div>
        <NoteFooter {...props.noteFooter} />
      </article>
      <Suspense fallback={<></>}>
        <NoteSearcher />
      </Suspense>
    </>
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
