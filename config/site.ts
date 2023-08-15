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
    github: "https://github.com/shoaibrain",
  },
}

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "projects",
      href:"https://github.com/shoaibrain?tab=repositories",
    },
    {
      title: "twitter",
      href: "https://twitter.com/shoaib_rain",
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/shoaibrain/",
    },
    {
      title: "blog",
      href: "/blog",
    },
    {
      title: "timeline",
      href: "/timeline",
    },
  ],
}