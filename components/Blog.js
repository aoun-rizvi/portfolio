import Image from 'next/image';

import PicCommission from '@/public/art/galaxy.jpg';
import BgAboutUs from '@/public/bg/bricks.jpg';

const PIC_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-1 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';


export default function Blog() {
  return (
    <blog className='relative w-full [height:calc(50vh)]'>

      <Image alt="bricks" className='z-0' src={BgAboutUs} layout="fill" objectFit="cover" quality={100} />
      <div className='flex flex-wrap items-center text-center justify-center z-10 w-full'>

        <div className='flex flex-col flex-wrap items-center text-center justify-center w-full absolute inset-0'>
          <div className='py-2 w-full'>
            <p className='text-3xl sm:text-5xl md:text-6xl text-gray-700 underline decoration-indigo-600'>Blog</p>
          </div>

          <div className='py-2 flex flex-row flex-wrap items-center text-center justify-evenly w-full max-w-6xl gap-4 overflow-x-auto'>
            <div className='flex flex-row overflow-x-auto w-full'>
              <div className='w-max'>
                <div className='px-2 py-2 flex flex-row w-full gap-4'>

                  <div className='w-full grow w-40 sm:w-56 border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer'>
                    <div className={`flex flex-col lg:flex-1 w-full ${PIC_STYLE}`}>
                      <a href='https://google.ca' target='blank'>
                        <div className='relative w-full [height:calc(25vh)]'>
                          <Image alt="galaxy" src={PicCommission} layout="fill" objectFit="cover" quality={50} />
                        </div>
                        <p>Blog post title</p>
                      </a>
                    </div>
                  </div>
                  <div className='w-full grow w-40 sm:w-56 border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer'>
                    <div className={`flex flex-col lg:flex-1 w-full ${PIC_STYLE}`}>
                      <a href='https://google.ca' target='blank'>
                        <div className='relative w-full [height:calc(25vh)]'>
                          <Image alt="galaxy" src={PicCommission} layout="fill" objectFit="cover" quality={50} />
                        </div>
                        <p>Blog post title</p>
                      </a>
                    </div>
                  </div>
                  <div className='w-full grow w-40 sm:w-56 border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer'>
                    <div className={`flex flex-col lg:flex-1 w-full ${PIC_STYLE}`}>
                      <a href='https://google.ca' target='blank'>
                        <div className='relative w-full [height:calc(25vh)]'>
                          <Image alt="galaxy" src={PicCommission} layout="fill" objectFit="cover" quality={50} />
                        </div>
                        <p>Blog post title</p>
                      </a>
                    </div>
                  </div>
                  <div className='w-full grow w-40 sm:w-56 border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer'>
                    <div className={`flex flex-col lg:flex-1 w-full ${PIC_STYLE}`}>
                      <a href='https://google.ca' target='blank'>
                        <div className='relative w-full [height:calc(25vh)]'>
                          <Image alt="galaxy" src={PicCommission} layout="fill" objectFit="cover" quality={50} />
                        </div>
                        <p>Blog post title</p>
                      </a>
                    </div>
                  </div>
                  <div className='w-full grow w-40 sm:w-56 border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer'>
                    <div className={`flex flex-col lg:flex-1 w-full ${PIC_STYLE}`}>
                      <a href='https://google.ca' target='blank'>
                        <div className='relative w-full [height:calc(25vh)]'>
                          <Image alt="galaxy" src={PicCommission} layout="fill" objectFit="cover" quality={50} />
                        </div>
                        <p>Blog post title</p>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </blog>
  )
}
