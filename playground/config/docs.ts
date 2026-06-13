export type NavItem = {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export type SidebarNavGroup = {
  title: string
  items: NavItem[]
}

export type DocsConfig = {
  mainNav: NavItem[]
  sidebarNav: SidebarNavGroup[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: "Documentation", href: "/docs" },
    { title: "Tokens", href: "/docs/tokens/colors" },
    { title: "Components", href: "/docs/components/accordion" },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs" },
      ],
    },
    {
      title: "Design Tokens",
      items: [
        { title: "Colors", href: "/docs/tokens/colors" },
        { title: "Color Match", href: "/docs/tokens/color-match" },
      ],
    },
    {
      title: "Components",
      items: [
        { title: "Accordion", href: "/docs/components/accordion" },
        { title: "Alert", href: "/docs/components/alert" },
        { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
        { title: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
        { title: "Avatar", href: "/docs/components/avatar" },
        { title: "Badge", href: "/docs/components/badge" },
        { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
      ],
    },
  ],
}
