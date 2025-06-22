// src/pages/theproject.tsx
import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';

const TheProjectPage: NextPage = () => (
  <>
    <Head>
      <title>The Project | Monument of the City to Build</title>
      <meta
        name='description'
        content='Learn about the aims, pedagogy and political ideas behind A Monument of the City to Build.'
      />
    </Head>

    <div className='ml-5 mt-15'>
      <section className='flex flex-row gap-23'>
        <div className='flex flex-col gap-3 justify-between'>
          <span className='ml-2 mt-[-0.5rem]'>
            <h1 className=' text-[2.4rem]'>About </h1>
            <h1 className=' text-[2.4rem]'>the project</h1>
          </span>
          <Link
            href='/theprojectsv'
            className='mb-20 rounded-3xl w-30 text-center justify-center align-middle border-2 border-[#FECE07] px-3 py-1 text-gray-900 backdrop-blur hover:bg-black hover:text-white hover:border-black'
          >
            svenska
          </Link>
        </div>
        <article className='w-[68%] text-[1.3rem] font-light'>
          <p>
            <i>A Monument of the City to Build</i> is a socially engaged
            artistic project, exploring the politics of residentship in the
            Swedish urban landscape through the notion of the right to the city.
            In a series of pedagogical events across Botkyrka and Gothenburg,
            over 200 participants have contributed to the project thus far with
            their thoughts, reflections and proposals.
          </p>
        </article>
      </section>
    </div>
  </>
);

export default TheProjectPage;
