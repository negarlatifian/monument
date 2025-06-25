// src/components/ScrollToTopButton.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import arrowUp from '/../src/assets/icons/arrow-up.png';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      aria-label='Back to top'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`
        fixed bottom-6 left-6 z-50
         rounded-md bg-white/80 scale-130
        p-3 transition-transform duration-200
        hover:scale-150 active:scale-150 hover:cursor-pointer
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <Image src='/icons/arrow-up.png' alt='' width={28} height={28} priority />
    </button>
  );
}
