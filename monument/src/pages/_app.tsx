// src/pages/_app.tsx
import '../app/globals.css'; // Tailwind & any base styles
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import Head from 'next/head';

// import { urban } from '@/lib/fonts';

/**
 * Augment NextPage so individual pages can export:
 *   MyPage.getLayout = (page) => <CustomLayout>{page}</CustomLayout>
 */
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  /** If the page defines its own layout, use it; otherwise fall back to MainLayout */
  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => <MainLayout>{page}</MainLayout>);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      {/* Font wrapper with all CSS variables */}
      <div>{getLayout(<Component {...pageProps} />)}</div>
    </>
  );
}
