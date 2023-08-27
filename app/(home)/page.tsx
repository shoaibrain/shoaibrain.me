import { siteConfig } from '@/config/site'
import Link from 'next/link'

export default async function HomePage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex justify-center items-center w-96 md:w-1/2 text-center">
          <p className="text-xl leading-8 text-gray-700 text-left">
            Hi there! My name is <span className="font-bold">Shoaib Rain</span>. I am a software engineer with a diverse background in crafting innovative solutions.
            With hands-on experience in designing and developing robust software systems, integrating cutting-edge technologies, and collaborating across multidisciplinary
            teams, I bring a unique blend of technical expertise and creative problem-solving.
          </p>
        </div>
        <div className="container flex justify-center items-center w-96 md:w-1/2 text-center">
          <p className="text-xl leading-8 text-gray-700 text-left">
            Over past few years, I have hold different roles & responsibilities. From automating reporting processes and optimizing data streams to revamping UI/UX
            and implementing dynamic features, I've consistently delivered value-driven solutions that align with business objectives.
            My journey encompasses contributions to companies like NetApp and Panasonic Automotive, where I've harnessed the power of technologies like Java,JavaScript, React, and more. <br/><br/>
            Currently, I am building a school management system, software as a service, for local schools in Nepal. You can follow my coding journey on 
            <span className="font-bold underline"> <Link href={siteConfig.links.github}>Github.</Link></span>
          </p>

        </div>
      </section>
    </>
  )
}