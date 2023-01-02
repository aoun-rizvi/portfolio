import Image from 'next/image';
import BgPic2 from '@/public/profile-pic-2.jpg';
import PicBumbleBuzz from '@/public/nft-marketplace/bumblebuzz-2.png';
import PicNFTGenerate from '@/public/nft-generator/nft-generate.png';
import BgLanding from '@/public/art/stars3.jpg';
import BgAboutUs from '@/public/bg/bricks.jpg';
import PicCommission from '@/public/art/galaxy.jpg';
import PicIncentive from '@/public/art/beach4.jpg';
import TwitterSolid from '@/public/socials/twitter-solid.svg';
import MediumSolid from '@/public/socials/medium-solid.svg';
import DiscordSolid from '@/public/socials/discord-solid.svg';
import GithubSolid from '@/public/socials/github-solid.svg';
import ButtonWrapper from '@/components/wrappers/ButtonWrapper';
import HeadlessDisclosure from '@/components/HeadlessDisclosure';


export default function Home() {
  const ABOUT_PIC_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-900 dark:hover:border-gray-600 dark:focus:ring-gray-700';
  const ABOUT_PIC_TEXT = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm xsm:text-lg xl:text-xl px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-900 dark:hover:border-gray-600 dark:focus:ring-gray-700';
  const COMMISSION_TEXT_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-900 dark:hover:border-gray-600 dark:focus:ring-gray-700';
  const INCENTIVE_TEXT_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-900 dark:hover:border-gray-600 dark:focus:ring-gray-700';
  const GALLERY_BOX_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-1 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';

  return (
    <main className='flex flex-nowrap flex-col items-center px-0 py-0 w-full bg-black'>

      {/* main landing area */}
      <div className='relative w-full h-screen'>
        <Image alt="stars" className='z-0 opacity-40' src={BgLanding} layout="fill" objectFit="cover" quality={1} priority={true} />
        <div className='flex flex-wrap items-center text-center justify-center z-10 w-full'>

          <div className='flex flex-col items-center text-center justify-center w-full absolute inset-0'>
            <div className='flex flex-col items-center text-center justify-center w-full max-w-4xl'>
              <p className='text-white text-4xl sm:text-6xl md:text-8xl'>I am Aoun Rizvi, a <br /> <span className='text-indigo-600'>Software Engineer.</span></p>

              <div className='py-2 flex flex-row gap-x-2'>
                <ButtonWrapper
                  onClick={() => window.open('https://twitter.com/0xBumbleBuzz/', 'blank')}
                  classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                ><TwitterSolid height={24} width={24} /></ButtonWrapper>
                <ButtonWrapper
                  onClick={() => window.open('https://medium.com/bumblebuzz/', 'blank')}
                  classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                ><MediumSolid height={24} width={24} /></ButtonWrapper>
                <ButtonWrapper
                  onClick={() => window.open('https://discord.gg/FgF3Pp5H', 'blank')}
                  classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                ><DiscordSolid height={24} width={24} /></ButtonWrapper>
                <ButtonWrapper
                  onClick={() => window.open('https://github.com/0xroshi/', 'blank')}
                  classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                ><GithubSolid height={24} width={24} /></ButtonWrapper>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* header */}
      <div className='py-2 w-full h-fit bg-gray-800 flex flex-row flex-wrap items-center text-center justify-center gap-4'></div>

      {/* about */}
      <div className='pt-28 pb-1 w-full h-fit bg-gray-700 flex flex-col flex-wrap items-center text-center justify-center gap-4'>
        <div className='py-2 w-full'>
          <p className='text-3xl sm:text-5xl md:text-6xl text-gray-200 underline decoration-sky-600'>About</p>
        </div>
        <div className='flex flex-row flex-wrap items-end text-center justify-evenly w-full gap-4'>
          <div className={`flex lg:flex-1 w-full max-w-3xl ${GALLERY_BOX_STYLE}`}>
            <div className='relative w-full [height:calc(50vh)]'>
              <Image alt="galaxy" src={BgPic2} layout="fill" objectFit="cover" quality={50} />
            </div>
          </div>
          <div className='flex flex-col flex-wrap max-w-2xl'>
            <div className='flex flex-row flex-wrap items-center text-center justify-center w-full gap-4'>
              <div className={`w-full ${ABOUT_PIC_TEXT}`}>
                <p className='relative flex flex-col items-center text-center justify-center h-fit'>
                  <span className='text-left indent-5'>I am a full-stack software developer. I have over a decade of experience working as a software engineer.</span>
                  <br />
                  <span className='text-left indent-5'>I have experience with numerous databses (e.g. PostgressSQL, AWS DynamoDB), back-end services in JAVA, and front-end frameworks (e.g. React, Angular, NextJS).</span>
                  <br />
                  <span className='text-left indent-5'>One of the other areas I have started to focus on is the Web 3.0 world. I have experience working with Solidity contracts and developing dApps.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='py-2'></div>
        <div className='flex flex-row flex-wrap items-end text-center justify-center w-full gap-4'>
          <div className={`max-w-lg ${ABOUT_PIC_TEXT}`}>
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
          <div className={`max-w-lg ${ABOUT_PIC_TEXT}`}>
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
      </div>

      {/* blog */}
      <div className='relative w-full [height:calc(50vh)]'>
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
                      <div className={`flex flex-col lg:flex-1 w-full ${GALLERY_BOX_STYLE}`}>
                        <a href='https://google.ca' target='blank'>
                          <div className='relative w-full [height:calc(25vh)]'>
                            <Image alt="galaxy" src={PicCommission} layout="fill" objectFit="cover" quality={50} />
                          </div>
                          <p>Blog post title</p>
                        </a>
                      </div>
                    </div>
                    <div className='w-full grow w-40 sm:w-56 border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer'>
                      <div className={`flex flex-col lg:flex-1 w-full ${GALLERY_BOX_STYLE}`}>
                        <a href='https://google.ca' target='blank'>
                          <div className='relative w-full [height:calc(25vh)]'>
                            <Image alt="galaxy" src={PicCommission} layout="fill" objectFit="cover" quality={50} />
                          </div>
                          <p>Blog post title</p>
                        </a>
                      </div>
                    </div>
                    <div className='w-full grow w-40 sm:w-56 border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer'>
                      <div className={`flex flex-col lg:flex-1 w-full ${GALLERY_BOX_STYLE}`}>
                        <a href='https://google.ca' target='blank'>
                          <div className='relative w-full [height:calc(25vh)]'>
                            <Image alt="galaxy" src={PicCommission} layout="fill" objectFit="cover" quality={50} />
                          </div>
                          <p>Blog post title</p>
                        </a>
                      </div>
                    </div>
                    <div className='w-full grow w-40 sm:w-56 border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer'>
                      <div className={`flex flex-col lg:flex-1 w-full ${GALLERY_BOX_STYLE}`}>
                        <a href='https://google.ca' target='blank'>
                          <div className='relative w-full [height:calc(25vh)]'>
                            <Image alt="galaxy" src={PicCommission} layout="fill" objectFit="cover" quality={50} />
                          </div>
                          <p>Blog post title</p>
                        </a>
                      </div>
                    </div>
                    <div className='w-full grow w-40 sm:w-56 border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer'>
                      <div className={`flex flex-col lg:flex-1 w-full ${GALLERY_BOX_STYLE}`}>
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
      </div>

      {/* projects */}
      <div className='pt-28 pb-1 w-full h-fit bg-gray-700 flex flex-col flex-wrap items-center text-center justify-center gap-4'>
        <div className='py-2 w-full'>
          <p className='text-3xl sm:text-5xl md:text-6xl text-gray-200 underline decoration-sky-600'>Recent Work</p>
        </div>
        {/* nft marketplace */}
        <div className='flex flex-row flex-wrap items-end text-center justify-evenly w-full gap-4'>
          <div className={`flex lg:flex-1 w-full ${GALLERY_BOX_STYLE}`}>
            <div className='relative w-full [height:calc(50vh)]'>
              <Image alt="galaxy" src={PicBumbleBuzz} layout="fill" objectFit="contain" quality={50} />
            </div>
          </div>
          <div className='flex flex-col flex-wrap max-w-2xl'>
            <p className='text-2xl sm:text-3xl md:text-4xl text-indigo-600'>NFT Marketplace</p>
            <br />
            <div className='flex flex-row flex-wrap items-center text-center justify-center w-full gap-4'>
              <div className={`w-full ${ABOUT_PIC_TEXT}`}>
                <p className='relative flex flex-col items-start text-center justify-center h-fit'>
                  <span className='text-left indent-5'>This is a fully functional NFT Marketplace on the Ethereum network. It is configured to use the MetaMask web wallet.</span>
                  <br />
                  <span className='text-left indent-5'>The marketplace allows users to put up their NFTs for sale. It also captures market data to help users previous NFT sales.</span>
                  <br />
                  <span className='text-left indent-5'>All the code is open source and can be viewed on GitHub linked below. The smart contracts are written in Solidity with full unit testing, and front-end is using the NextJS framework along with tailwind for CSS.</span>
                </p>

                <div className='py-2 flex flex-row gap-x-2'>
                  <ButtonWrapper
                    onClick={() => window.open('https://github.com/Bumble-Buzz/', 'blank')}
                    classes="gap-x-1 items-center text-black font-bold bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                  >GitHub</ButtonWrapper>
                  <ButtonWrapper
                    onClick={() => window.open('https://docs.bumblebuzz.io/', 'blank')}
                    classes="gap-x-1 items-center text-black font-bold bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                  >Documentation</ButtonWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-10'></div>
        {/* NFT Generator */}
        <div className='flex flex-row flex-wrap items-end text-center justify-evenly w-full gap-4'>
          <div className='flex flex-col flex-wrap max-w-2xl'>
            <p className='text-2xl sm:text-3xl md:text-4xl text-indigo-600'>NFT Generator</p>
            <br />
            <div className='flex flex-row flex-wrap items-center text-center justify-center w-full gap-4'>
              <div className={`w-full ${ABOUT_PIC_TEXT}`}>
                <p className='relative flex flex-col items-start text-center justify-center h-fit'>
                  <span className='text-left indent-5'>This is a CLI tool written in Node to generate NFT assets randomly.</span>
                  <br />
                  <span className='text-left indent-5'>User needs to provide a set of random assets (eyes, arms, legs, face, etc...). There is also a configuration file required to be filled by the user, to determine how many NFTs to generate and how the rarity system will work.</span>
                  <br />
                  <span className='text-left indent-5'>Using the configuration and assets, the nftGenerator will randomly generate NFTs. Both still images and animations will be produced. The metadata produced is OpenSea compatible.</span>
                  <br />
                  <span className='text-left indent-5'>When the NFTs are produced, user is also able to push directly to IPFS via Pinata directly. Please see the code in GitHub linked below.</span>
                </p>

                <div className='py-2 flex flex-row gap-x-2'>
                  <ButtonWrapper
                    onClick={() => window.open('https://github.com/0xroshi/nftgenerate/', 'blank')}
                    classes="gap-x-1 items-center text-black font-bold bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                  >GitHub</ButtonWrapper>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex lg:flex-1 w-full ${GALLERY_BOX_STYLE}`}>
            <div className='relative w-full [height:calc(50vh)]'>
              <Image alt="beach" src={PicNFTGenerate} layout="fill" objectFit="cover" quality={50} />
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className='relative w-full [height:calc(100vh)] xsm:[height:calc(75vh)] sm:[height:calc(50vh)]'>
        <Image alt="bricks" className='z-0' src={BgAboutUs} layout="fill" objectFit="cover" quality={100} />
        <div className='flex flex-wrap items-center text-center justify-center z-10 w-full'>

          <div className='flex flex-col items-center text-center justify-center w-full absolute inset-0'>
            <div className='py-2 w-full'>
              <p className='text-3xl sm:text-5xl md:text-6xl text-gray-700 underline decoration-indigo-600'>Contact</p>
            </div>
            <div className='flex flex-col flex-wrap max-w-md'>
              {/* <p className='text-2xl text-indigo-600'>BumbleBuzz on Aurora</p> */}
              <div className='w-full text-xl'>
                <p>Please feel free to contact me via my socials, or by directly emailing me at <a className='text-blue-500' href="mailto:aounrizvi@live.com">aounrizvi@live.com</a>.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* footer */}
      <div className='py-2 w-full h-fit bg-gray-800 flex flex-row flex-wrap items-center text-center justify-center gap-4'>
        <p className='text-white'>Copyright © 2023</p>
      </div>

    </main>
  )
}
