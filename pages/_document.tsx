import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-dtinth>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '"#og:image"===location.hash&&document.documentElement.setAttribute("data-screenshot-mode","")',
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
