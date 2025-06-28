import Head from 'next/head';
import Link from 'next/link';
import type { ReactElement } from 'react';
import LandingLayout from '@/components/layouts/LandingLayout';
import type { NextPageWithLayout } from './_app';
// import '../styles/globals.css';
import HomeNavbar from '@/components/HomeNavbar';
import MonumentLogo from '../assets/monument-logo.svg';
import Image from 'next/image';

/** Homepage – wrapped in LandingLayout via getLayout */
const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* Document head */}
      <Head>
        <title>Monument of the City to Build</title>
        <meta
          name='description'
          content='Discover hundreds of ideas imagined by Gothenburg’s children.'
        />
      </Head>

      {/* Centered hero content (the video background comes from LandingLayout) */}
      <main className='relative mx-auto flex h-screen max-w-4xl flex-col items-center justify-center text-center'>
        <Image
          src='/monument-logo.svg'
          alt='monument logo'
          width={800}
          height={259}
        />
        {/* <h1 className='text-5xl font-bold leading-tight text-black  md:text-6xl'>
          a monument of the city&nbsp;to&nbsp;build
        </h1> */}

        {/* <Link
          href='/contributions'
          className='mt-10 rounded-xl bg-white/90 px-6 py-3 text-lg font-medium text-gray-900 backdrop-blur hover:bg-white'
        >
          View contributions
        </Link> */}
        <HomeNavbar />
      </main>
    </>
  );
};

/** Use the full-bleed video LandingLayout just for this page */
Home.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
