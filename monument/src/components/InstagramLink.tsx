// src/components/InstagramLink.tsx
import { Instagram } from 'lucide-react'; // ❶ `lucide-react` gives crisp SVG icons
// npm i lucide-react  ← run once in your project

export default function InstagramLink() {
  return (
    <a
      href='https://www.instagram.com/thecitytobuild/'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Visit our Instagram'
      className='
        inline-block text-zinc-800           /* default colour */
        hover:text-yellow-400 transition-colors
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-yellow-400 rounded
      '
    >
      {/* Icon is just an SVG; scale & stroke set here */}
      <Instagram size={25} strokeWidth={2.3} />
    </a>
  );
}
