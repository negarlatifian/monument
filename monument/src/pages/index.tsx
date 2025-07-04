import Head from 'next/head';
import type { ReactElement } from 'react';
import LandingLayout from '@/components/layouts/LandingLayout';
import type { NextPageWithLayout } from './_app';
import HomeNavbar from '@/components/HomeNavbar';
import Image from 'next/image';
import Link from 'next/link';

/** Homepage – wrapped in LandingLayout via getLayout */
const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Monument of the City to Build</title>
        <meta
          name='description'
          content='Discover hundreds of ideas imagined by Gothenburg’s children.'
        />
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </Head>

      {/* Centered hero content (the video background comes from LandingLayout) */}
      <main className='relative mx-auto  h-screen max-w-4xl flex flex-col justify-center '>
        <div className='sm:hidden absolute top-4 right-4 '>
          <HomeNavbar />
        </div>
        <div className='flex flex-col items-center justify-center text-center'>
          <Link
            className='flex justify-center w-[80%] sm:w-[100%]'
            href='/theproject'
          >
            <Image
              src='/monument-logo.svg'
              alt='monument logo'
              width={800}
              height={259}
              priority
            />
          </Link>
          <div className='hidden sm:flex sm:w-[100%] sm:justify-end sm:px-8'>
            <HomeNavbar />
          </div>
        </div>
      </main>
    </>
  );
};

/** Use the full-bleed video LandingLayout just for this page */
Home.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
