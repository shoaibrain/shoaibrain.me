import { MarketingConfig } from "@/types"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Shoaib Rain",
  description:"Home",
  url: "https://www.shoaibrain.me",
  mainNav: [
    {
      title: "home",
      href: "/",
    },
  ],
  links: {
    
    github: "https://github.com/shoaibrain",
    linkedin: "https://www.linkedin.com/in/shoaibrain/",
    instagram: "https://www.instagram.com/shoaibrain4real/",
  },
}

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title:"blog",
      href:"/blog"
    },
    {
      title: "work",
      href:"/work",
    },
  ],
}