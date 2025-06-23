// src/components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const buttonItems = [
  { label: 'Gothenburg', href: '/contributions' },
  { label: 'Botkyrka', href: '/contributions-botkyrka' },
];

export default function DoubleButton() {
  const { pathname } = useRouter();

  const linkClass = (href: string) =>
    `flex mb-20 rounded-3xl w-30 text-center justify-center align-middle border-2 border-[#FECE07] px-20 py-0.9 font-light text-[0.95rem] text-gray-900 backdrop-blur hover:bg-black hover:text-white hover:border-black
     ${pathname === href ? 'bg-[#FECE07]' : 'bg-white'}
     hover:bg-[rgb(186,186,186)]`;

  return (
    <div className='flex flex-row gap-5'>
      {buttonItems.map(({ label, href }) => (
        <Link key={href} href={href} className={linkClass(href)}>
          {label}
        </Link>
      ))}
    </div>
  );
}
