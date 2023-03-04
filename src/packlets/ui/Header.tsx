import { Icon } from "react-iconify-icon-wrapper"
import { FC, Fragment } from "react"
import { CommandConnector } from "../commands"
import { LayoutBreadcrumb } from "../layout-props"
import classes from "./Header.module.css"
import searchIcon from "@iconify-icons/codicon/search"
import editIcon from "@iconify-icons/codicon/edit"
import githubIcon from "@iconify-icons/codicon/github-alt"
import shareIcon from "@iconify-icons/codicon/open-preview"
import remoteIcon from "@iconify-icons/codicon/remote-explorer"
import { NoteInfoConnector } from "./NoteInfoConnector"
import { SignedInOnly } from "../auth"

export interface Header {
  breadcrumb?: LayoutBreadcrumb[] | null
  slug?: string | null
  mode?: "public" | "preview" | "private"
}

export const Header: FC<Header> = (props) => {
  const mode = props.mode || "public"
  return (
    <>
      <header className={classes.header}>
        <div className={classes.left}>
          <div className={classes.title}>
            <a href="/">notes.dt.in.th</a>
            {mode === "private" && (
              <a
                href={`/${props.slug}`}
                title="Click to navigate to public version"
              >
                <span className={classes.titleBadge} data-mode="private">
                  Private
                </span>
              </a>
            )}
            {mode === "preview" && (
              <span className={classes.titleBadge} data-mode="preview">
                Preview
              </span>
            )}
          </div>
        </div>
        <div className={classes.middle}>
          {(props.breadcrumb || []).map((item) => (
            <Fragment key={item.href}>
              <div className={classes.breadcrumbSeparator}>
                <span>›</span>
              </div>
              <div className={classes.breadcrumbItem}>
                <a href={item.href}>{item.title}</a>
              </div>
            </Fragment>
          ))}
        </div>
        <div className={classes.right}>
          {!!props.slug && mode === "public" && (
            <SignedInOnly>
              {(user) => (
                <a
                  className={classes.rightItem}
                  title="Edit"
                  href={`/private/${props.slug}`}
                >
                  <Icon icon={editIcon} height={24} />
                </a>
              )}
            </SignedInOnly>
          )}
          {!!props.slug && mode === "private" && (
            <NoteInfoConnector slug={props.slug}>
              {(info) => (
                <>
                  <a
                    className={classes.rightItem}
                    title="Share preview"
                    href={info.privateToken}
                  >
                    <Icon icon={shareIcon} height={24} />
                  </a>
                  <a
                    className={classes.rightItem}
                    title="Edit on GitHub"
                    href={info.editUrl}
                  >
                    <Icon icon={githubIcon} height={24} />
                  </a>
                  <a
                    className={classes.rightItem}
                    title="vscode.dev"
                    href={info.vscodeDevUrl}
                  >
                    <Icon icon={remoteIcon} height={24} />
                  </a>
                </>
              )}
            </NoteInfoConnector>
          )}
          <CommandConnector name="search">
            {(command) =>
              command ? (
                <button
                  className={classes.rightItem}
                  onClick={command.run}
                  title="Search"
                >
                  <Icon icon={searchIcon} height={24} />
                </button>
              ) : null
            }
          </CommandConnector>
          <a
            className={classes.rightItem}
            href="https://webring.wonderful.software/#dt.in.th"
            title="วงแหวนเว็บ (webring)"
          >
            <Icon icon={webringIcon} height={32} />
          </a>
        </div>
      </header>
      <div className={classes.spacer} />
    </>
  )
}

const webringIcon = {
  body: `<path fill-rule="evenodd" clip-rule="evenodd" d="M53 128.8l-16-8.2a192 192 0 1094.7-88.9l7.1 16.6A174 174 0 1153 128.8z" fill="#8b8685"></path> <path d="M94.7 92.3L82 126.5 62.6 95.7l-36.4-1.4 23.3-28-9.9-35.1 33.9 13.5 30.3-20.3-2.4 36.4L130 83.3l-35.3 9z" fill="#d7fc70"></path>`,
  width: 416,
  height: 416,
}
