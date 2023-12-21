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
    twitter: "https://twitter.com/shoaib_rain",
    github: "https://github.com/shoaibrain",
    
    linkedin: "https://www.linkedin.com/in/shoaibrain/",
    instagram: "https://www.instagram.com/shoaib99rain/"
  },
}

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "about",
      href: "/about",
    },
    {
      title:"blog",
      href:"/blog"
    },
    {
      title: "work",
      href:"/work",
    },
    {
      title:"resume",
      href:"https://docs.google.com/document/d/1SOvcXS6SrS-ZpT9Hlub4jTWUOU9sQTnqEWgp_6TEkho/edit?usp=sharing"
    }

  ],
}