'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface Props {
  src: string;
  alt?: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt = '', onClose }: Props) {
  // close on ESC and lock body scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  // render into <body> via portal
  return createPortal(
    <div
      onClick={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'
    >
      {/* stop closing when the user clicks on the picture itself */}
      <div onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1200}
          priority
          className='max-h-[90vh] w-auto object-contain'
        />
      </div>
    </div>,
    document.body
  );
}
