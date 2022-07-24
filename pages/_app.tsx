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
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-4343503-10"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-4343503-10")`}
      </Script>
    </>
  );
}

export default MyApp;
