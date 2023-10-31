import Link from "next/link"

import { worksConfig } from "@/config/works"
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import { SiteFooter } from "@/components/site-footer"
import { WorksSidebarNav } from "@/components/sidebar-nav"

interface WorksLayoutProps {
  children: React.ReactNode
}

export default function WorksLayout({ children }: WorksLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={worksConfig.mainNav}>
            <WorksSidebarNav items={worksConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <nav className="flex space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">View all works</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
      <SiteFooter className="border-t" />
    </div>
  )
}