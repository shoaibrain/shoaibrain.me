import { cn } from '@/lib/utils'
import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import { ThemeProvider } from '@/components/theme-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'


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
           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <TailwindIndicator />
          </ThemeProvider>
        </body>
    </html>
  )
}
