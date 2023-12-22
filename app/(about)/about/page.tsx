import Image from "next/image";
import hike from "@/public/images/hike.jpeg";
export default async function AboutPage() {


    return (
        <>
        <div className="container flex justify-center items-center w-96 md:w-1/2 text-center">

          <div className="text-xl leading-8 text-left pb-4">

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
            <span className="font-heading my-4 py-4"> About me <br/> </span>
            I'm an engineer with focus in software engineering, web development and machine learning.
            In the past I've worked for NetApp, Panasonic, UT Texas, Srimatrix Inc.
            In addition to my engineering work, I also enjoy podcast, music, hiking, and gaming.
            <br />
            I'm currently pursuing a bachelors in Computer Science at the University of Texas-Arlington.
            On this website, you'll find an incomplete directory of my engineering work, personal blogs, 
            as well as ramblings about whatever happens to cross my mind.
          </div> 

        </div>
        </>
    )
}