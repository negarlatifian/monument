// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'The Project', href: '/theproject' },
  { label: 'Contributions', href: '/contributions' },
  { label: 'Map', href: '/map' },
  { label: 'Discussions', href: '/discussions' },
  { label: 'Public Displays', href: '/publicdisplays' },
  { label: 'About Us', href: '/aboutus' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  /* Prevent background-scroll when overlay is open */
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  const linkClass = (href: string) =>
    `block py-4 text-lg tracking-wide transition-colors
     ${pathname === href ? 'font-semibold text-[#FECE07]' : 'text-gray-900'}
     hover:text-[#FECE07]`;

  return (
    <nav className='relative z-30'>
      {/* ---------- Desktop bar ---------- */}
      <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6'>
        <div className='hidden gap-6 sm:flex'>
          {navItems.map(({ label, href }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </div>

        {/* ---------- Mobile hamburger ---------- */}
        <button
          onClick={() => setOpen(!open)}
          aria-label='Toggle navigation'
          className='sm:hidden'
        >
          <svg
            className='h-7 w-7 stroke-gray-800'
            fill='none'
            strokeWidth={1.5}
            viewBox='0 0 24 24'
          >
            {open ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 6h18M3 12h18M3 18h18'
              />
            )}
          </svg>
        </button>
      </div>

      {/* ---------- Mobile full-screen overlay ---------- */}
      {open && (
        <div
          className='fixed inset-0 z-40 flex flex-col items-center justify-center
                     gap-1 bg-white px-6 text-center sm:hidden'
        >
          {/* Close (X) button */}
          <button
            aria-label='Close navigation'
            onClick={() => setOpen(false)}
            className='absolute top-4 right-4 rounded-md p-2 transition-colors
                       hover:bg-gray-100 active:scale-95'
          >
            <svg
              className='h-6 w-6 stroke-gray-800'
              fill='none'
              strokeWidth={1.5}
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          {/* Navigation links */}
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={linkClass(href)}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
