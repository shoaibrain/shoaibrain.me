import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import { ThemeProvider } from '@/components/theme-provider'
import { MainNav } from '@/components/main-nav'
import { marketingConfig } from '@/config/site'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})
export const metadata: Metadata = {
  title: 'Shoaib Rain',
  description: 'Personal website of Shoaib Rain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body   className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}>
              <header className="container z-30 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                  <MainNav items={marketingConfig.mainNav} />
                </div>
          </header>
          {children}
        </body>
    </html>
  )
}
