import Image from 'next/image';

import BgLanding from '@/public/art/stars3.jpg';
import PicIncentive from '@/public/art/beach4.jpg';
import TwitterSolid from '@/public/socials/twitter-solid.svg';
import MediumSolid from '@/public/socials/medium-solid.svg';
import DiscordSolid from '@/public/socials/discord-solid.svg';
import GithubSolid from '@/public/socials/github-solid.svg';
import ButtonWrapper from '@/components/wrappers/ButtonWrapper';


export default function LandingArea() {
  return (
    <landing className='relative w-full h-screen'>

      <Image alt="stars" className='z-0 opacity-40' src={BgLanding} layout="fill" objectFit="cover" quality={1} priority={true} />
      <div className='flex flex-wrap items-center text-center justify-center z-10 w-full'>

        <div className='flex flex-col items-center text-center justify-center w-full absolute inset-0'>
          <div className='flex flex-col items-center text-center justify-center w-full max-w-4xl'>
            <p className='text-white text-4xl sm:text-6xl md:text-8xl'>I am Aoun Rizvi, a <br /> <span className='text-indigo-600'>Software Engineer.</span></p>

            <div className='py-2 flex flex-row gap-x-2'>
              <ButtonWrapper
                onClick={() => window.open('https://twitter.com/aounrizvi_/', 'blank')}
                classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
              ><TwitterSolid height={24} width={24} /></ButtonWrapper>
              <ButtonWrapper
                onClick={() => window.open('https://aounrizvi.medium.com/', 'blank')}
                classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
              ><MediumSolid height={24} width={24} /></ButtonWrapper>
              <ButtonWrapper
                onClick={() => window.open('https://github.com/aoun-rizvi/', 'blank')}
                classes="gap-x-1 items-center bg-gray-100 hover:bg-gray-300 focus:ring-gray-500"
              ><GithubSolid height={24} width={24} /></ButtonWrapper>
            </div>
          </div>
        </div>

      </div>

    </landing>
  )
}
