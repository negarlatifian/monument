import Link from 'next/link';
import { PropsWithChildren } from 'react';

/**
 * Layout used **only** by the homepage.
 * Renders a full-bleed background video, a transparent navbar that
 * floats over it, and injects the page content into the foreground.
 */
export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* ---------------- Video background ---------------- */}
      <video
        className='fixed inset-0 -z-10 w-full h-full object-cover '
        autoPlay
        muted
        loop
        playsInline
        // poster='/video/hero-poster.jpg'
      >
        <source src='/video/hero.webm' type='video/webm' />
        <source src='/video/hero.mp4' type='video/mp4' />
      </video>

      {/* Optional dark overlay for readability */}
      <div className='pointer-events-none fixed inset-0 -z-10 ' />

      {/* ---------------- Transparent navbar ---------------- */}
      {/* <header className='absolute inset-x-0 top-0 z-20 flex items-center justify-between p-6 text-white'>
        <Link href='/' className='text-lg font-semibold tracking-wide'>
          Monument
        </Link>

        <nav className='hidden gap-6 text-sm font-medium sm:flex'>
          <Link href='/about' className='hover:underline'>
            About
          </Link>
          <Link href='/contributions' className='hover:underline'>
            Contributions
          </Link>
        </nav>
      </header> */}

      {/* ---------------- Page content ---------------- */}
      {children}
    </>
  );
}
