import Link from "next/link";
import { FC, Fragment } from "react";
import { LayoutBreadcrumb } from "../layout-props";
import classes from "./Header.module.css";

export interface Header {
  breadcrumb?: LayoutBreadcrumb[] | null;
}

export const Header: FC<Header> = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.left}>
          <div className={classes.title}>
            <Link href="/">notes.dt.in.th</Link>
          </div>
        </div>
        <div className={classes.middle}>
          {(props.breadcrumb || []).map((item) => (
            <Fragment key={item.href}>
              <div className={classes.breadcrumbSeparator}>
                <span>›</span>
              </div>
              <div className={classes.breadcrumbItem}>
                <Link href={item.href}>{item.title}</Link>
              </div>
            </Fragment>
          ))}
        </div>
      </header>
      <div className={classes.spacer} />
    </>
  );
};
