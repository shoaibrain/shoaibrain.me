
import Link from 'next/link'
import Image from 'next/image'
import profile from "@/public/images/avatars/profile.jpg";

export default async function HomePage() {

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container md:flex justify-center items-center md:w-1/2">
        <figure className='sm:flex md:p-0'>
            <div className='mx-auto my-auto sm:mr-8'>
              <div className='mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden'>
                <Image
                  src={profile}
                  alt="SR"
                  priority={true}
                  layout='responsive' // Use responsive layout to maintain aspect ratio
                  className='object-cover rounded-full'
                />
              </div>
            </div>
            
            <div className="pt-6 sm:p-4 text-center sm:text-left space-y-4">
                <div className='text-xl text-left'>
                    <div className="leading-8 font-bold">
                      Shoaib Rain
                    </div>
                    <div className='text-muted-foreground'>
                      Software Engineer in Dallas <br />
                    </div>
                    <p className="text-lg font-medium ">
                      I'm an engineer with focus in software engineering & web development. 
                      I also enjoy podcast, music, hiking, and good coffee.
                      <br /> <br />
                      On this website, you'll find an incomplete directory of my work, blogs,
                      as well as ramblings about whatever happens to cross my mind.
                      <br /> 
                    </p>

                </div>
            </div>
        </figure>
        </div>
      </section>
    </>
  )
}