import "@fontsource/arimo/400.css"
import "@fontsource/arimo/400-italic.css"
import "@fontsource/arimo/500.css"
import "@fontsource/arimo/500-italic.css"
import "@fontsource/arimo/600.css"
import "@fontsource/arimo/600-italic.css"
import "@fontsource/arimo/700.css"
import "@fontsource/arimo/700-italic.css"
import "comic-mono/index.css"
import "water.css/out/dark.css"
import "littlefoot/dist/littlefoot.css"
import "../vendor/raster.grid.css"
import "../assets/dtinth-water.css"
import "../styles/globals.css"

import type { AppProps } from "next/app"
import { Analytics } from "../src/packlets/analytics"
import { Header } from "../src/packlets/ui"
import { PageLayoutProps } from "../src/packlets/layout-props"
import { QuickLinks } from "../src/packlets/quicklinks"
import { lazy, Suspense } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../src/packlets/react-query"

const NoteSearcher = lazy(() => import("../src/packlets/search"))

function MyApp({ Component, pageProps, router }: AppProps) {
  const layoutProps = (pageProps as PageLayoutProps).layoutProps
  return (
    <QueryClientProvider client={queryClient}>
      <Header
        breadcrumb={layoutProps?.breadcrumb}
        slug={layoutProps?.currentSlug}
        mode={layoutProps?.mode}
      />
      <Component {...pageProps} />
      <Analytics />
      <QuickLinks />
      <Suspense fallback={<></>}>
        <NoteSearcher />
      </Suspense>
    </QueryClientProvider>
  )
}

export default MyApp
