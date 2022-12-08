import { FC, useEffect } from "react";

export interface QuickLinks {}

export const QuickLinks: FC<QuickLinks> = (props) => {
  useEffect(() => {
    import("quicklink").then((quicklink) => {
      quicklink.listen();
    });
  }, []);
  return null;
};
