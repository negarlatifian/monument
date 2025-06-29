// src/components/layouts/MainLayout.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import Navbar from '../Navbar';
import Head from 'next/head';

/** A shared layout for every page *except* the landing page */
export default function MainLayout({ children }: PropsWithChildren) {
  const { pathname } = useRouter();

  const linkClass = (href: string) =>
    `transition-colors hover:text-black ${
      pathname === href ? 'text-black' : 'text-gray-600'
    }`;

  return (
    <>
      <Head>
        {/* <link rel='icon' href='/favicon.ico' sizes='any' /> */}
        {/* optional additional formats */}
        <link rel='icon' type='image/svg+xml' href='/favicon.png' />
      </Head>
      {/* ---------- Header ---------- */}
      <header className='sticky top-0 z-30  bg-white/90 backdrop-blur'>
        <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3 '>
          <Link
            href='/'
            className='sm:text-xl text-[1rem] font-semibold text-black'
          >
            A Monument of a City to Build
          </Link>
          <Navbar />
        </div>
      </header>

      {/* ---------- Main content ---------- */}
      <main className='mx-auto w-full max-w-5xl'>{children}</main>

      {/* ---------- Footer ---------- */}
      {/* <footer className='border-t bg-gray-50 py-8 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} Monument of the City to Build. All rights
        reserved.
      </footer> */}
    </>
  );
}
