import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props: any) {
  // console.log(props);
  return (
    <Html data-dtinth>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '"#og:image"===location.hash&&document.documentElement.setAttribute("data-screenshot-mode","")',
          }}
        />
        <link
          rel="icon"
          type="image/png"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAGFBMVEUAAADd/3XZ/3LY/XHY/XDX/XDX/HDX/HBGVehjAAAAB3RSTlMAFThdhLvo4ZXzLQAAArdJREFUeAHs18Fu00AQxnHHCeGaA9DrSgi4Wgjo1YhSrgWwfI1L5b3S1t7v9TnshZWIs/buXygovwfw1DPzTdwi2urlVdP3Ut83V293RWblu8bqD675ZHI+/rP+4ocBHk+UeG91kPue/udfa9Jd4ks8szrCfUxqjyIktOmDovwsllldK9Ldjn2+r8A931cA+p82h1ea6dvM/ddss/KwtprNVTMG3GqBMX7Qr7XIbRFpo4VqskG+SVyDvFu0QbFNapVgLI56riRfYyeMzfmFEnXFpNIqkTPUikataqkMDPUCEa+wssrA7bgV8jomAxFZeKJMboArFBiBMxpzVN8omwdsRyc21Y+YHPMXZTQQZyhggBQHOiYEE1FYK7OK7ZDUcTvkDeAOeQZI2UTWLpXd4+E7BNyjjQA1t6Rexy2pN4QjQIewkdghbIXYkykIk2CFcMCpDlXcIQrP0YUg92DMgqhZCZ1yKYzBchxkeSvMHstxkOVWmJFdIsnBSyQZdomkGrpEwTV6KtAv/78f5wE6dcG5ayU2CEKhMfBBWAtVsTmTajZn0g1fYCvUvrgQ6p68FP5WXAr1yJ4iaeALtEKNfAErlDte4FxAsP+ggBXr32/RucDpX9PT/0Xjf/Txzxb8wwv/dDz9r+vftdyBAAAAAMIwf+tRDKP66wGkR6geAnuM/UG8Vwm9DOl1Ti+keqXWS8Fea/5idlbLvRzv9X4fKPbE8keiP3P9oe5PjX8s/XPvH6z/5N6hgY49fHCjoycdnun4zweYOoLVIbKPwXWQr6OIH6bsOGgHWj+S26HijkV/sLuj6R+u73pAFxy+otElk6/JdNHnq0pXtgq6WBDetrLXpcOtTXbx86urX779+vAXoL/C/SX0r9H/I4B/ZfDPGP6dxD/E+Jce/5Tk36r8Y5h/bfPPefq9EI9VRTu5xbU5AAAAAElFTkSuQmCC"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
