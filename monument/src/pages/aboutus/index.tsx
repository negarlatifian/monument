import Head from 'next/head';

import Link from 'next/link';
import InstagramLink from '@/components/InstagramLink';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { NextPage } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // CSS variable
});

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>About Us | Monument of the City to Build</title>
      <meta
        name='about us'
        content='Learn more about the people behind the project.'
      />
    </Head>
    <div className='flex flex-col mt-15 mb-5 items-center min-h-screen'>
      <section className='flex flex-col text-[0.7rem] sm:flex-row sm:w-[65%] sm:gap-[3rem] sm:text-[0.8rem] text-[rgb(54,54,54)] sm:leading-4 sm:mb-15  text-center justify-evenly '>
        <div className='flex flex-col gap-5 '>
          <p>
            <i>A Monument of the City to Build </i>was initiated in 2021 by
            Azadeh E. Zaghi and Reyhaneh Mirjahani.
          </p>
          <p>
            The current team members are&nbsp;
            <Link
              href='https://www.instagram.com/azadehzaghi/'
              className='underline cursor-pointer'
            >
              Azadeh E. Zaghi
            </Link>
            ,&nbsp;
            <br />
            <Link
              href='https://www.reyhanehmirjahani.com/'
              className='underline cursor-pointer'
            >
              Reyhaneh Mirjahani
            </Link>{' '}
            and&nbsp;
            <Link
              href='https://alexandrapapademetriou.com/'
              className='underline cursor-pointer'
            >
              Alexandra Papademetriou
            </Link>
            .
          </p>
        </div>
        <div className='text-[rgb(186,186,186)] flex flex-col gap-5 '>
          <p>
            <i>A Monument of the City to Build </i>
            startades 2021 av Azadeh E. Zaghi och Reyhaneh Mirjahani.
          </p>
          <p>
            Projektet drivs nu av&nbsp;
            <Link
              href='https://azadehzaghi.com/'
              className='underline cursor-pointer'
            >
              Azadeh E. Zaghi
            </Link>
            ,&nbsp;
            <br />
            <Link
              href='https://www.reyhanehmirjahani.com/'
              className='underline cursor-pointer'
            >
              Reyhaneh Mirjahani
            </Link>{' '}
            och&nbsp;
            <Link
              href='https://alexandrapapademetriou.com/'
              className='underline cursor-pointer'
            >
              Alexandra Papademetriou
            </Link>
            .
          </p>
        </div>
      </section>
      <section>
        <p
          className={`${montserrat.className} text-[0.85rem] text-[rgb(54,54,54)]`}
        >
          Contact us at&nbsp;
          <Link href='mailto:motctb@gmail.com'>motctb@gmail.com</Link>
        </p>
      </section>
      <div className='mt-5'>
        <InstagramLink />
      </div>
      <span className='w-[75%] border-b-3 border-b-[#FECE07] mt-5'></span>
      <section className='text-[0.8rem] text-[rgb(54,54,54)] font-normal'>
        <p className='mt-5 mb-5'>
          A Monument of the City to Build is realised with the support of:
        </p>
        <div className='flex flex-col text-center'>
          <p>Kulturrådet – The Swedish Arts Council</p>
          <p>
            Kulturförvaltningen, Kultur och samhällsutveckling – Göteborgs Stad
          </p>
          <p>Stadsmiljöförvaltningen – Göteborgs Stad</p>
          <p>GöteborgsLokaler</p>
          <p>Kreativa fonden - Botkyrka Kommun</p>
          <p>Mångkulturellt Centrum – MKC</p>
        </div>
      </section>
    </div>
  </>
);

export default AboutPage;
