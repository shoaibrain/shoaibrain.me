
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { marketingConfig } from "@/config/site"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}