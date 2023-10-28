import { WorksConfig } from "types"
import { siteConfig } from "./site"

export const worksConfig: WorksConfig = {
  mainNav: [
    {
      title: "GitHub",
      href: siteConfig.links.github,
    },
  ],
  sidebarNav: [
    {
      title: "My works",
      items: [
        {
          title: "Introduction",
          href: "/work",
        },
      ],
    },
    {
      title: "eduSpace",
      items: [
        {
          title: "Overview",
          href: "work/eduSpace",
          disabled : true,
          
        },
        {
          title: "Technical details",
          href: "/work",
          disabled: true,
        },
        {
          title: "Testing & Quality",
          href: "/work",
          disabled: true,
        },
        {
          title: "User Experience",
          href: "/work",
          disabled: true,
        },
      ],
    },
    {
      title: "Data Engineering",
      items: [
        {
          title: "Overview",
          href: "/work/data-engineering",
          disabled: true,
        },
        {
          title: "Technical details",
          href: "/work",
          disabled: true,
        },
        {
          title: "Testing & Quality",
          href: "/work",
          disabled: true,
        },
        {
          title: "Showcase",
          href: "/work",
          disabled: true,
        },
      ],
    },
  ],
}