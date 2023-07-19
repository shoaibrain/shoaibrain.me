import * as React from "react"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex justify-end mr-8 p-4">
        <ThemeToggle />
      </div>
    </footer>
  )
}