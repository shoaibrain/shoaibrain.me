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
          href: "/work/eduSpace",
          disabled : false, 
        },
        {
          title: "Technical details",
          href: "/work/in-progress",
          disabled: false,
        },
        {
          title: "Testing & Quality",
          href: "/work/in-progress",
          disabled: true,
        },
        {
          title: "User Experience",
          href: "/work/in-progress",
          disabled: true,
        },
      ],
    },

  ],
}