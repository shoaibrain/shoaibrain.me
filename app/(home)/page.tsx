import { siteConfig } from '@/config/site'
import Link from 'next/link'

export default async function HomePage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex justify-center items-center w-96 md:w-1/2 text-center">
          <p className="text-xl leading-8 text-gray-700 text-left">
            Hi there! My name is <span className="font-bold">Shoaib Rain</span>. I am a software engineer, optimist, and sh*t poster on Twitter.
            Please don't read my <span className="font-bold underline"> <Link href="https://twitter.com/shoaib_rain">tweets</Link></span> 🫣. 
            I enjoy coding my thoughts, listening to music, and I can be easily bribed with a cup of coffee.
          </p>
        </div>
        <div className="container flex justify-center items-center w-96 md:w-1/2 text-center">
          <p className="text-xl leading-8 text-gray-700 text-left">
            Over past few years, I have hold different roles & responsibilities; from building a feature-matrix documentation framework for
            <span className="font-bold underline"> <Link href="https://www.netapp.com/cloud-services/cloud-insights/">CloudInsight</Link></span> to helping
            dsylexic students with their studies at <span className="font-bold underline"> <Link href="https://www.dallascollege.edu/">Dallas College.</Link></span> <br/><br/>
            Currently, I am building a school management system, software as a service, for local schools in Nepal. You can follow my coding journey on 
            <span className="font-bold underline"> <Link href={siteConfig.links.github}>Github.</Link></span>
          </p>

        </div>
      </section>
    </>
  )
}