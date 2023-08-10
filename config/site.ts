import { MarketingConfig } from "@/types"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Shoaib Rain",
  description:"home",
  url: "https://www.shoaibrain.me",
  mainNav: [
    {
      title: "home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shoaib_rain",
    github: "https://github.com/shoaibrain/shoaibrain.me",
  },
}

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "github",
      href: "https://github.com/shoaibrain/",
    },
    {
      title: "twitter",
      href: "https://twitter.com/shoaib_rain",
    },
    {
      title: "timeline",
      href: "/timeline",
    },
    {
      title:"linkedin",
      href:"https://www.linkedin.com/in/shoaibrain/"
    }
  ],
}