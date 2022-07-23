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
import "../vendor/raster.grid.css";
import "../assets/dtinth-water.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
