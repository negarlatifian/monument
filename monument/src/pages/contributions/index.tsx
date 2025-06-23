// src/pages/theproject.tsx
import { promises as fs } from 'fs';
import Head from 'next/head';
import type { NextPage, GetStaticProps } from 'next';
import DoubleButton from '@/components/DoubleButton';
import ContributionItem from '@/components/ContributionItem';
import { Contribution } from '@/types';

interface ContributionsPageProps {
  contributions: Contribution[];
}

export const getStaticProps: GetStaticProps = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/data/contributions.json',
    'utf8'
  );
  const contributions: Contribution[] = JSON.parse(file);

  return { props: { contributions } };
};

const ContributionsPage: NextPage<ContributionsPageProps> = ({
  contributions,
}) => (
  <>
    <Head>
      <title>Contributions | Monument of the City to Build</title>
      <meta
        name='description'
        content='Browse every contribution to A Monument of the City to Build.'
      />
    </Head>
    <div className='flex flex-col ml-5 mt-15 mr-15 mb-20'>
      <section className='flex flex-row text-[0.86rem] font-light leading-4 gap-20 mb-15 '>
        <div className='w-[87%] flex flex-col gap-5'>
          <p>
            The images here represent the proposals, wishes, dreams, and
            reflections of each one of the 200+ participants in A Monument of
            the City to Build, collected between 2021 and 2024.
          </p>
          <p>
            These participants include mostly children, but also adults, from a
            variety of neighbourhoods in Gothenburg and Botkyrka. In each
            workshop, we offered the participants a set of random photographs of
            public spaces in the surrounding neighbourhood and beyond, taken
            from Google Street View. Each participant would choose a photograph
            to intervene upon.
          </p>
          <p>
            We also asked the participants to each write a short explanatory
            note to accompany their drawing. For those who chose to do so, you
            can read their notes here, in both English and Swedish. Some texts
            have been edited for clarity.
          </p>
        </div>
        <div className='text-[rgb(186,186,186)] w-[87%] flex flex-col gap-5'>
          <p>
            Bilderna här visar förslag, önskningar, drömmar och reflektioner
            från var och en av de över 200 deltagarna i [Ett monument för staden
            som återstår att byggas], insamlat mellan 2021 och 2024.
          </p>
          <p>
            Bland deltagarna finns främst barn, men även vuxna, från en rad
            olika stadsdelar i Göteborg och Botkyrka. I varje workshop erbjöd vi
            deltagarna en uppsättning slumpmässiga fotografier av offentliga
            platser i och utanför det omgivande grannskapet, tagna från Google
            Street View. Varje deltagare skulle välja ett fotografi att
            bearbeta.
          </p>
          <p>
            Vi bad också deltagarna att skriva en kort förklaring till sin
            teckning. Du kan läsa texterna från de som valde att göra det här,
            på både engelska och svenska. Vissa texter har redigerats för
            tydlighetens skull.
          </p>
        </div>
      </section>
      <section className='flex flex-row'>
        <DoubleButton />
      </section>
      <section className='flex flex-row text-[0.86rem] font-light leading-4 gap-20 mb-15 '>
        <div className='w-[87%] flex flex-col gap-5'>
          <p>
            The contributions have been gathered in collaboration with: Blå
            Stället Konsthall, Hammarkullens skolan, Dômen konstskola, Göteborgs
            Botaniska Trädgård, Allas Ateljé, Konstepidemin, University of
            Gothenburg/HDK-Valand (lärarutbildning department),
            Skolförvaltningen, Skolan Mitt i byn Nordost, Sandeklevsskolan,
            Bergsjöskolan, Rannebergsskolan, Frölunda på Linden/positivparken,
            and Svartedalsskolan.
          </p>
        </div>
        <div className='w-[87%] flex flex-col gap-5'>
          <p>
            Bidragen har samlats in i samarbete med: Blå Stället Konsthall,
            Hammarkullens skola, Dômen konstskola, Göteborgs Botaniska Trädgård,
            Allas Ateljé, Konstepidemin, University of Gothenburg/HDK-Valand
            (lärarutbildning department), Skolförvaltningen, Skolan Mitt i byn
            Nordost, Sandeklevsskolan, Bergsjöskolan, Rannebergsskolan, Frölunda
            på Linden/positivparken och Svartedalsskolan.
          </p>
        </div>
      </section>
    </div>
    <div className='flex flex-col'>
      {contributions.map((contribution) => (
        <ContributionItem key={contribution.id} contribution={contribution} />
      ))}
    </div>
  </>
);
export default ContributionsPage;
