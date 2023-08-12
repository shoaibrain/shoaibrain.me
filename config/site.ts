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
      title: "blog",
      href: "/blog",
    },
    {
      title: "timeline",
      href: "/timeline",
    },
    {
      title:"github",
      href:"https://www.github.com/shoaibrain"
    }
  ],
}