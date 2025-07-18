import localFont from 'next/font/local';
// import { urban } from '@/lib/fonts';
import { Montserrat, Roboto, Rubik } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { urbanGrotesk } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
};
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // CSS variable
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto', // CSS variable
});
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-rubik', // CSS variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${roboto.variable} ${urbanGrotesk.className}`}
    >
      <body
        className={`${urbanGrotesk.className} ${montserrat.variable} ${rubik.variable} text-[rgb(54,54,54)]`}
      >
        {children}
      </body>
    </html>
  );
}
