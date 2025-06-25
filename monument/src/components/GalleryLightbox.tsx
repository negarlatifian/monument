'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface Props {
  images: string[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  index,
  onChange,
  onClose,
}: Props) {
  const total = images.length;
  const src = images[index];

  /* lock body-scroll + keyboard shortcuts */
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((index + 1) % total);
      if (e.key === 'ArrowLeft') onChange((index - 1 + total) % total);
    };
    document.addEventListener('keydown', key);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', key);
      document.body.style.overflow = overflow;
    };
  }, [index, total, onChange, onClose]);

  const prev = () => onChange((index - 1 + total) % total);
  const next = () => onChange((index + 1) % total);

  /* render into <body> so it’s above everything */
  return createPortal(
    <div
      onClick={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'
    >
      {/* × close */}
      <button
        onClick={onClose}
        className='absolute top-5 right-6 text-3xl text-white hover:scale-110'
        aria-label='Close'
      >
        &times;
      </button>

      {/* arrows */}
      {total > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className='absolute left-4 text-4xl text-white hover:scale-110'
            aria-label='Previous'
          >
            &#10094;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className='absolute right-4 text-4xl text-white hover:scale-110'
            aria-label='Next'
          >
            &#10095;
          </button>
        </>
      )}

      {/* full image */}
      <div onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt=''
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
