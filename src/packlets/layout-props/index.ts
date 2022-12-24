export interface PageLayoutProps {
  layoutProps?: LayoutProps
}

export interface LayoutProps {
  currentSlug?: string | null
  breadcrumb?: LayoutBreadcrumb[] | null
}

export interface LayoutBreadcrumb {
  href: string
  title: string
}
