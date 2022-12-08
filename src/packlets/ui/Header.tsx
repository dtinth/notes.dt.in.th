import Link from "next/link";
import { FC } from "react";
import classes from "./Header.module.css";

export interface Header {}

export const Header: FC<Header> = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.container}>
          <div className={classes.section}>
            <div className={classes.title}>
              <Link href="/">notes.dt.in.th</Link>
            </div>
          </div>
        </div>
      </header>
      <div className={classes.spacer} />
    </>
  );
};
