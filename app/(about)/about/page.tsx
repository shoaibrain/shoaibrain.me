import { siteConfig } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import hike from "@/public/images/hike.jpeg";
export default async function AboutPage() {


    return (
        <>
        <div className="container flex justify-center items-center w-96 md:w-1/2 text-center">

          <div className="text-xl leading-8 text-gray-700 text-left pb-4">

            <div className="relative my-8 h-96 mb-4">
              <Image
              alt="Me hiking in the mountains of Nepal"
              src={hike}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="lg object-cover"
              />
            </div>
            <span className="font-bold my-4 py-4"> About me <br/> </span>

            I'm an engineer with focus in software engineering, machine learning and robotics.
            In the past I've worked for Panasonic, Srimatrix Inc, UT Texas, NetApp, and a number of other companies.
            In addition to my engineering work, I also enjoy music, hiking, and gaming.
            <br />
            I'm currently pursuing a bachelors in Computer Science at the University of Texas-Arlington.
            On this website, you'll find an incomplete directory of my engineering and artistic work, 
            as well as ramblings about whatever happens to cross my mind.
          </div> 

        </div>
        </>
    )
}