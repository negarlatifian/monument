// src/components/layouts/MainLayout.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

/** A shared layout for every page *except* the landing page */
export default function MainLayout({ children }: PropsWithChildren) {
  const { pathname } = useRouter();

  const linkClass = (href: string) =>
    `transition-colors hover:text-black ${
      pathname === href ? 'text-black' : 'text-gray-600'
    }`;

  return (
    <>
      {/* ---------- Header ---------- */}
      <header className='sticky top-0 z-30 border-b bg-white/90 backdrop-blur'>
        <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6'>
          <Link href='/' className='text-xl font-semibold text-black'>
            Monument
          </Link>

          <nav className='hidden items-center gap-6 text-sm font-medium sm:flex'>
            <Link href='/about' className={linkClass('/about')}>
              About
            </Link>
            <Link href='/contributions' className={linkClass('/contributions')}>
              Contributions
            </Link>
          </nav>
        </div>
      </header>

      {/* ---------- Main content ---------- */}
      <main className='mx-auto w-full max-w-5xl'>{children}</main>

      {/* ---------- Footer ---------- */}
      <footer className='border-t bg-gray-50 py-8 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} Monument of the City to Build. All rights
        reserved.
      </footer>
    </>
  );
}
