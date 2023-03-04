export interface PageLayoutProps {
  layoutProps?: LayoutProps
}

export interface LayoutProps {
  currentSlug?: string | null
  breadcrumb?: LayoutBreadcrumb[] | null
  mode: "public" | "private" | "preview"
}

export interface LayoutBreadcrumb {
  href: string
  title: string
}
