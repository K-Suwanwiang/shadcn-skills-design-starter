import { SiteHeader } from "@/components/layout/site-header"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <div className="flex flex-1 md:grid md:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="sticky top-14 z-30 hidden h-[calc(100svh-3.5rem)] border-r border-border md:block">
          <ScrollArea className="h-full">
            <SidebarNav />
          </ScrollArea>
        </aside>
        <main className="min-w-0 px-6 py-8 lg:px-10 lg:py-10">{children}</main>
      </div>
    </div>
  )
}
