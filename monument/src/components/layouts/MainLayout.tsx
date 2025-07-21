// src/components/layouts/MainLayout.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import Navbar from '../Navbar';
import Head from 'next/head';

import { urbanGrotesk } from '@/lib/fonts';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // CSS variable
});

/** A shared layout for every page *except* the landing page */
export default function MainLayout({ children }: PropsWithChildren) {
  const { pathname } = useRouter();

  const linkClass = (href: string) =>
    `transition-colors hover:text-black ${
      pathname === href ? 'text-black' : 'text-gray-600'
    }`;

  return (
    <html
      lang='en'
      // className={`${montserrat.variable} ${roboto.variable} ${urban.variable}`}
    >
      <Head>
        <link rel='icon' type='image/svg+xml' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      {/* ---------- Header ---------- */}
      <header className='sticky top-0 z-30  bg-white/90 backdrop-blur'>
        <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:mt-0 sm:mr-0 sm:ml-[10rem] mt-3 ml-6 mr-1 '>
          <Link
            href='/'
            className='sm:text-xl text-[0.95rem] font-semibold text-black'
          >
            A Monument of a City to Build
          </Link>
          <Navbar />
        </div>
      </header>

      {/* ---------- Main content ---------- */}
      <main
        className={`mx-auto w-full max-w-5xl ${urbanGrotesk.className} ${montserrat.variable}`}
      >
        {children}
      </main>
    </html>
  );
}
