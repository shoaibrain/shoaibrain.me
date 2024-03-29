import { notFound } from "next/navigation"
import { getTableOfContents } from "@/lib/toc"
import { Mdx } from "@/components/mdx-components"
import "@/app/styles/mdx.css"
import { Metadata } from "next"

import { env } from "@/env.mjs"
import { absoluteUrl } from "@/lib/utils"
import { allWorks } from "@/.contentlayer/generated"
import { WorksPageHeader } from "@/components/page-header"
import { WorksPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"
import { Accordion, AccordionContent, AccordionTrigger } from "@/components/ui/accordion"
import { AccordionItem } from "@radix-ui/react-accordion"

interface WorkPageProps {
  params: {
    slug: string[]
  }
}

async function getWorkFromParams(params) {
  const slug = params.slug?.join("/") || ""
  const work = allWorks.find((work) => work.slugAsParams === slug)

  if (!work) {
    null
  }
  return work
}
export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const work = await getWorkFromParams(params)

  if (!work) {
    return {}
  }
  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", work.description ?? work.title)
  ogUrl.searchParams.set("type", "Documentation")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      type: "article",
      url: absoluteUrl(work.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: work.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: work.title,
      description: work.description,
      images: [ogUrl.toString()],
    },
  }
}


export async function generateStaticParams(): Promise<
  WorkPageProps["params"][]
> {
  return allWorks.map((work) => ({
    slug: work.slugAsParams.split("/"),
  }))
}

export default async function WorkPage({ params }: WorkPageProps) {
  
  const work = await getWorkFromParams(params)
  
  if (!work) {
    notFound()
  }
  const toc = await getTableOfContents(work.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <WorksPageHeader heading={work.title} text={work.description} />
        <Mdx code={work.body.code} />
        <hr className="my-4 md:my-6" />
        <WorksPager work={work} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}