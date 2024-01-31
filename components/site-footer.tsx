import * as React from "react"

import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "./ui/button"
import { Icons } from "./icons"


export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex justify-around items-center mr-8 p-4">
        <div>

        <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
        </Link>
        <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </div>
        </Link>
        <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </div>
        </Link>
        </div>
        <div>
        <ModeToggle />
        </div>
      </div>
    </footer>
  )
}