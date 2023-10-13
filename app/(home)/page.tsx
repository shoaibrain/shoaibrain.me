import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  // temp redirect
  redirect('/about')
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex justify-center items-center w-96 md:w-1/2 text-center">
          <p className="text-xl leading-8 text-gray-700 text-left"> <span className="font-bold">Shoaib Rain</span><br/> <br />
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. At unde dignissimos recusandae assumenda ex minus eos officiis quasi sequi harum similique, cupiditate quis.
        <br /><br />
           <Link href="/about"  className="text-blue-500">Know me more!</Link> <br /> <br />
    
          </p>
        </div>
      </section>
    </>
  )
}