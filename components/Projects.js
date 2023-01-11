import Image from 'next/image';

import PicBumbleBuzz from '@/public/nft-marketplace/bumblebuzz-2.png';
import PicNFTGenerate from '@/public/nft-generator/nft-generate.png';
import ButtonWrapper from '@/components/wrappers/ButtonWrapper';

const PIC_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-1 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';
const TEXT_STYLE = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm xsm:text-lg xl:text-xl px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-900 dark:hover:border-gray-600 dark:focus:ring-gray-700';


export default function Projects() {
  return (
    <projects className='pt-20 pb-2 w-full h-fit bg-gray-700 flex flex-col flex-wrap items-center text-center justify-center gap-4'>

      <div className='py-2 w-full'>
        <p className='text-3xl sm:text-5xl md:text-6xl text-gray-200 underline decoration-sky-600'>Recent Work</p>
      </div>

      {/* nft marketplace */}
      <div className='flex flex-row flex-wrap items-end text-center justify-evenly w-full gap-4'>
        <div className={`flex lg:flex-1 w-full ${PIC_STYLE}`}>
          <div className='relative w-full [height:calc(50vh)]'>
            <Image alt="galaxy" src={PicBumbleBuzz} layout="fill" objectFit="contain" quality={50} />
          </div>
        </div>
        <div className='flex flex-col flex-wrap max-w-2xl'>
          <p className='text-2xl sm:text-3xl md:text-4xl text-indigo-600'>NFT Marketplace</p>
          <br />
          <div className='flex flex-row flex-wrap items-center text-center justify-center w-full gap-4'>
            <div className={`w-full ${TEXT_STYLE}`}>
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
            <div className={`w-full ${TEXT_STYLE}`}>
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
                  onClick={() => window.open('https://github.com/aoun-rizvi/nftgenerate/', 'blank')}
                  classes="gap-x-1 items-center text-black font-bold bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
                >GitHub</ButtonWrapper>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex lg:flex-1 w-full ${PIC_STYLE}`}>
          <div className='relative w-full [height:calc(50vh)]'>
            <Image alt="beach" src={PicNFTGenerate} layout="fill" objectFit="cover" quality={50} />
          </div>
        </div>
      </div>

    </projects>
  )
}
