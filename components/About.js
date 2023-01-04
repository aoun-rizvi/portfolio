import Image from 'next/image';

import BgPic2 from '@/public/profile-pic-2.jpg';

const IMAGE_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-1 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';
const TEXT_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm xsm:text-lg xl:text-xl px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-900 dark:hover:border-gray-600 dark:focus:ring-gray-700';


export default function About() {
  return (
    <about className='pt-20 pb-2 w-full h-fit bg-gray-700 flex flex-col flex-wrap items-center text-center justify-center gap-4'>

      <div className='py-2 w-full'>
        <p className='text-3xl sm:text-5xl md:text-6xl text-gray-200 underline decoration-sky-600'>About</p>
      </div>

      <div className='flex flex-row flex-wrap items-end text-center justify-evenly w-full gap-4'>
        <div className={`flex lg:flex-1 w-full max-w-3xl ${IMAGE_STYLE}`}>
          <div className='relative w-full [height:calc(50vh)]'>
            <Image alt="galaxy" src={BgPic2} layout="fill" objectFit="cover" quality={50} />
          </div>
        </div>
        <div className='flex flex-col flex-wrap max-w-2xl'>
          <div className='flex flex-row flex-wrap items-center text-center justify-center w-full gap-4'>
            <div className={`w-full ${TEXT_STYLE}`}>
              <p className='relative flex flex-col items-center text-center justify-center h-fit'>
                <span className='text-left indent-5'>I am a full-stack software developer. I have over a decade of experience working as a software engineer.</span>
                <br />
                <span className='text-left indent-5'>I have experience with numerous databses (e.g. PostgressSQL, AWS DynamoDB), back-end services in JAVA, and front-end frameworks (e.g. React, Angular, NextJS).</span>
                <br />
                <span className='text-left indent-5'>One of the other areas I have started to focus on is the Web 3.0 world. I have experience working with Solidity contracts and developing dApps.</span>
                <br />
                <span className='text-left'><a href='resume/Aoun Rizvi.pdf' download className={`${IMAGE_STYLE} text-lg font-bold`}>Download Resume</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='py-2'></div>

      <div className='flex flex-row flex-wrap items-end text-center justify-center w-full gap-4'>
        <div className={`max-w-lg ${TEXT_STYLE}`}>
          <div className='relative flex flex-col h-fit items-start text-left justify-center'>
            <span className='text-2xl text-indigo-600 w-full items-center text-center justify-center'>Experience</span>
            <br />
            <span className=''>&#8226; Ciena</span>
            <span className='indent-2'>DevOps Engineer</span>
            <span className='indent-2 opacity-50'>November 2022 - Present</span>
            <span className='py-2 px-2 indent-2'>Working both in back-end using Java, and front-end using Angular. Also working towards implementing DevOps practices across the team.</span>
            <br />
            <span className=''>&#8226; IBM</span>
            <span className='indent-2'>DevOps Engineer</span>
            <span className='indent-2 opacity-50'>May 2018 - November 2021</span>
            <span className='py-2 px-2 indent-2'>Worked as a DevOps Eng. to help the team adopt automation, CI/CD, and other DevOps practices.</span>
          </div>
        </div>
        <div className={`max-w-lg ${TEXT_STYLE}`}>
          <div className='relative flex flex-col h-fit items-start text-left justify-center'>
            <span className='text-2xl text-indigo-600 w-full items-center text-center justify-center'>Education</span>
            <br />
            <span className=''>&#8226; University of Ottawa</span>
            <span className='indent-2'>Masters in Engineering Management</span>
            <span className='indent-2 opacity-50'>2015 - 2017</span>
            <br />
            <span className=''>&#8226; Carleton University</span>
            <span className='indent-2'>Bachelors in Systems and Computer Engineering</span>
            <span className='indent-2 opacity-50'>2008 - 2013</span>
          </div>
        </div>
      </div>

    </about>
  )
}
