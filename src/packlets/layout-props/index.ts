export interface PageLayoutProps {
  layoutProps?: LayoutProps;
}

export interface LayoutProps {
  breadcrumb?: LayoutBreadcrumb[] | null;
}

export interface LayoutBreadcrumb {
  href: string;
  title: string;
}
