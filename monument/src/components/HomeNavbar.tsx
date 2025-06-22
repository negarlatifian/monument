// src/components/Navbar.tsx
import { useState } from 'react';
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

  const linkClass = (href: string) =>
    `block px-4 py-2 text-sm transition-colors
     ${pathname === href ? 'text-[#fece07] font-semibold' : 'text-black'}
     hover:text-[rgb(254,206,7)]`;

  return (
    <nav className='relative z-30 '>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6'>
        {/* Desktop links */}
        <div className='hidden items-center gap-6 sm:flex'>
          {navItems.map(({ label, href }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label='Toggle navigation'
          className='sm:hidden'
        >
          <svg
            className='h-6 w-6 stroke-gray-800'
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
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className='sm:hidden'>
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
