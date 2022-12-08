import "@fontsource/arimo/400.css";
import "@fontsource/arimo/400-italic.css";
import "@fontsource/arimo/500.css";
import "@fontsource/arimo/500-italic.css";
import "@fontsource/arimo/600.css";
import "@fontsource/arimo/600-italic.css";
import "@fontsource/arimo/700.css";
import "@fontsource/arimo/700-italic.css";
import "comic-mono/index.css";
import "water.css/out/dark.css";
import "littlefoot/dist/littlefoot.css";
import "../vendor/raster.grid.css";
import "../assets/dtinth-water.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Analytics } from "../src/packlets/analytics";
import { Header } from "../src/packlets/ui";
import { PageLayoutProps } from "../src/packlets/layout-props";

function MyApp({ Component, pageProps, router }: AppProps) {
  const layoutProps = (pageProps as PageLayoutProps).layoutProps;
  const header = String(router.query.flags).split(",").includes("header");
  return (
    <>
      {!!header && <Header breadcrumb={layoutProps?.breadcrumb} />}
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
