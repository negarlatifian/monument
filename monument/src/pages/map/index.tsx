// src/pages/theproject.tsx
import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import SectionBlock from '@/components/SectionBlock';

const TheProjectPage: NextPage = () => (
  <>
    <Head>
      <title>The Project Svenska | Monument of the City to Build</title>
      <meta
        name='map'
        content='Learn about the aims, pedagogy and political ideas behind A Monument of the City to Build.'
      />
    </Head>
    <div className='flex flex-col ml-5 mt-15 mr-15 mb-20'>
      <section className='flex flex-row text-[0.95rem] font-light leading-5 gap-20 mb-15 '>
        <div className='w-[80%]'>
          <p>
            Here you can find all the contributions pinned to their original
            locations on the map of Gothenburg and Botkyrka.
          </p>
        </div>
        <div className='text-[rgb(186,186,186)] w-[80%]'>
          <p>
            Här hittar du alla bidrag fastnålade på sina ursprungliga platser på
            kartan över Göteborg och Botkyrka.
          </p>
        </div>
      </section>
      <section className='flex flex-col gap-10'>
        <div className='flex flex-row justify-center'>
          <iframe
            src='https://www.google.com/maps/d/embed?mid=1GhYJ5-eTPNAhJlGyciIDm118gz28gYo&ehbc=2E312F'
            width='960'
            height='720'
          ></iframe>
        </div>
        <div className='flex flex-row justify-center'>
          <iframe
            src='https://www.google.com/maps/d/embed?mid=1OFSOV9GYek1rDZYZieHn_4n7OnpyAjg&ehbc=2E312F'
            width='960'
            height='720'
          ></iframe>
        </div>
      </section>
    </div>
  </>
);

export default TheProjectPage;
