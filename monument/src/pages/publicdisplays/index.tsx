import { promises as fs } from 'fs';
import type { NextPage, GetStaticProps } from 'next';
import { Exhibition } from '@/types';
import Image from 'next/image';
import Head from 'next/head';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import PublicDisplay from '@/components/PublicDisplay';

interface ExhibitionPageProps {
  exhibitions: Exhibition[];
}

export const getStaticProps: GetStaticProps = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/data/publicDisplay.json',
    'utf8'
  );
  const exhibitions: Exhibition[] = JSON.parse(file);

  return { props: { exhibitions } };
};

const PublicDisplayPage: NextPage<ExhibitionPageProps> = ({ exhibitions }) => {
  return (
    <>
      <Head>
        <title>Contributions | Monument of the City to Build</title>
        <meta
          name='description'
          content='Browse every Public dispalys of A Monument of the City to Build.'
        />
      </Head>
      {exhibitions.map((exhibition, idx) => (
        <PublicDisplay key={idx} exhibition={exhibition} />
      ))}
      <ScrollToTopButton />
    </>
  );
};
export default PublicDisplayPage;
