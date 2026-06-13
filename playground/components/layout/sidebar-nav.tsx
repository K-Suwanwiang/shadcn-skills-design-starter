"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { docsConfig } from "@/config/docs"

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-6 px-4 py-6">
      {docsConfig.sidebarNav.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <p className="px-2 py-1 text-sm font-semibold text-foreground">
            {group.title}
          </p>
          <div className="flex flex-col gap-px">
            {group.items.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-2 py-1.5 text-sm transition-colors",
                    isActive
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.title}
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </nav>
  )
}
