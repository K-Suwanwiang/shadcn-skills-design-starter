"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center gap-2">
        <div
          aria-hidden="true"
          className="size-5 rounded-sm bg-foreground"
        />
        <span className="font-semibold tracking-tight">
          {siteConfig.shortName}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {docsConfig.mainNav.map((item) => {
          const isActive =
            item.href === "/docs"
              ? pathname === "/docs"
              : pathname.startsWith(item.href.replace(/\/[^/]*$/, ""))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                isActive ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
