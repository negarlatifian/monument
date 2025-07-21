// src/pages/theproject.tsx
import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import SectionBlock from '@/components/SectionBlock';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // CSS variable
});

const TheProjectPage: NextPage = () => (
  <>
    <Head>
      <title>The Project Svenska | Monument of the City to Build</title>
      <meta
        name='map'
        content='Learn about the aims, pedagogy and political ideas behind A Monument of the City to Build.'
      />
    </Head>
    <div
      className={` ${montserrat.className}flex flex-col ml-[2rem] sm:ml-5 mt-15 mr-[2rem] sm:mr-15 mb-20`}
    >
      <section className='flex sm:flex-row flex-col sm:text-[0.85rem] text-[0.68rem] font-light leading-5 gap-5 sm:gap-20 mb-10 sm:mb-15 '>
        <div className='sm:w-[80%] w-fit'>
          <p>
            Here you can find all the contributions pinned to their original
            locations on the map of Gothenburg and Botkyrka.
          </p>
        </div>
        <div className='text-[rgb(186,186,186)] sm:w-[80%]'>
          <p>
            Här hittar du alla bidrag fastnålade på sina ursprungliga platser på
            kartan över Göteborg och Botkyrka.
          </p>
        </div>
      </section>
      <section className='flex flex-col gap-10 items-center'>
        <div className='hidden sm:flex flex-row justify-center sm:w-[90%] align-middle'>
          <iframe
            src='https://www.google.com/maps/d/embed?mid=1GhYJ5-eTPNAhJlGyciIDm118gz28gYo&ehbc=2E312F'
            width='960'
            height='720'
          ></iframe>
        </div>
        <div className='sm:hidden flex flex-row justify-center w-[90%] align-middle'>
          <iframe
            src='https://www.google.com/maps/d/embed?mid=1GhYJ5-eTPNAhJlGyciIDm118gz28gYo&ehbc=2E312F'
            width='480'
            height='360'
          ></iframe>
        </div>
        <div className='hidden sm:flex flex-row justify-center w-[90%]'>
          <iframe
            src='https://www.google.com/maps/d/embed?mid=1OFSOV9GYek1rDZYZieHn_4n7OnpyAjg&ehbc=2E312F'
            width='960'
            height='720'
          ></iframe>
        </div>
        <div className='sm:hidden flex flex-row justify-center w-[90%]'>
          <iframe
            src='https://www.google.com/maps/d/embed?mid=1OFSOV9GYek1rDZYZieHn_4n7OnpyAjg&ehbc=2E312F'
            width='480'
            height='360'
          ></iframe>
        </div>
      </section>
    </div>
  </>
);

export default TheProjectPage;
