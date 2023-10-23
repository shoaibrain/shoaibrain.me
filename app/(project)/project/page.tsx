
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "Projects",
  description: "A list of projects I've worked on.",
}

export default async function ProjectPage() {

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
          These are the some of the projects I've worked on. I'm currently working on a few more projects that I will add to this list soon.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <Link href="https://github.com/shoaibrain" className={cn(buttonVariants({ size: "lg" }))}>
              view my work on github 
      </Link>
    </div>
  )
}