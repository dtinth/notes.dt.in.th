import { FC } from "react";

export interface SyndicationItem {
  title: string;
  url: string;
  path: string;
}

export interface NoteFooter {
  pubDate: {
    human: string;
    machine: string;
  } | null;
  syndication: SyndicationItem[];
}

export const NoteFooter: FC<NoteFooter> = (props) => {
  const { pubDate, syndication } = props;
  return (
    <footer className="post-footer">
      <p className="meta">
        <a href="/" title="Back to notes.dt.in.th">
          —
        </a>
        <a
          className="p-author h-card"
          href="https://dt.in.th"
          title="Back to main website"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/d7fc70-circle-192.png"
            alt=""
            style={{ display: "none" }}
          />
          @dtinth
        </a>
        {pubDate && (
          <>
            ,
            <time className="dt-published" dateTime={pubDate.machine}>
              {pubDate.human}
            </time>
          </>
        )}
      </p>
      {!!syndication.length && (
        <p className="syndication-links">
          Respond on:
          {syndication.map((link, i) => (
            <a
              key={link.title}
              href={link.url}
              rel="syndication"
              className="syndication u-syndication"
              title={link.title}
            >
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>{link.title}</title>
                <path d={link.path}></path>
              </svg>
            </a>
          ))}
        </p>
      )}
    </footer>
  );
};
