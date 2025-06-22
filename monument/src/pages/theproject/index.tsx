// src/pages/theproject.tsx
import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import SectionBlock from '@/components/SectionBlock';

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
      <div className='flex flex-col mb-4 gap-5'>
        <section className='flex flex-row gap-23 '>
          <div className='flex flex-col gap-3 '>
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
          <article className='flex flex-col gap-5 w-[68%] text-[1.25rem] font-light leading-6.5'>
            <p>
              <i>A Monument of the City to Build</i> is a socially engaged
              artistic project, exploring the politics of residentship in the
              Swedish urban landscape through the notion of the right to the
              city. In a series of pedagogical events across Botkyrka and
              Gothenburg, over 200 participants have contributed to the project
              thus far with their thoughts, reflections and proposals.
            </p>
            <p>
              The project investigates how successive generations of social,
              cultural, and financial policies have shaped the development of
              urban spaces in Sweden, and how this development has in turn
              affected the relationship between the inhabitants and their city.{' '}
            </p>
            <p>
              Engaging both children and adults from various neighbourhoods
              across the map, the aim is to create spaces for collective
              thinking and intersectional meetings, inviting residents into
              discussions about their relationship with their city. In this, the
              desire is to enable inhabitants from all backgrounds to recognise
              their own agency, and to see themselves as capable of demanding
              and creating a better environment to live in.
            </p>
          </article>
        </section>
        <span className='w-[80%] border-b-3 border-b-[#FECE07] mr-5 ml-auto'></span>
      </div>
      <div className='flex flex-col ml-5 mr-auto'>
        <SectionBlock
          titles={['The right to', 'the city']}
          paragraphs={[
            'The concept of the right to the city has been the starting point for this project: the idea that every individual, regardless of their background, has the inherent right not only to physically access urban spaces, but also to actively participate in the processes of city governance and development, to shape the urban environment and experience. This concept, which was coined by sociologist Henri Lefebvre and developed by philosophers like David Harvey, advocates for open, equitable, and democratic access to urban planning, ensuring that city development benefits everyone rather than only a privileged few.',
            'Similarly, in opening up the discussion of the right to the city, this project attempts to reorient decision-making power away from large institutions, from state and capital, and into the hands of the city’s inhabitants in order to create a space in which they can train in participation, responsibility, and critical thinking: the fundamental skills of active democratic citizens.',
          ]}
        />
        <SectionBlock
          titles={['Pedagogical', 'events']}
          paragraphs={[
            'Based on this starting point, the project was designed around the idea of creating a platform where children and adults have the space to articulate their desires for the city, providing them tools and materials to convey their thoughts. The pedagogical events offered a dedicated time and space where participants were safe to explore their feelings and ideas together, and to express themselves creatively without fearing failure or censure. ',
            'Each event was sparked off by looking together at various images from public places, both from the immediate area of the event space and from the whole city. The participants were then invited to choose an image to work with and create a photo-intervention or a text-based contribution based on what they want to change as well as what they already like and feel about the city.',
            'A common feeling at the start of these events was that urban development can only happen from the top down – that only a few people with institutional power can shape the city. This feeling had the effect of severely limiting the participants’ imagination and even their desire to engage with urban issues on any level. To this end, the project employed unlearning as a pedagogical methodology: encouraging participants to challenge their preconceptions about urban processes and to reconsider their relationship with the city. The participants were encouraged to see themselves as active agents in the city and as authorities over their own lives and experiences in the urban environment. By fostering a sense of ownership and responsibility for the city, the participants were empowered to think critically and creatively about urban spaces.',
          ]}
        />
        <SectionBlock
          titles={['Imagination as a', 'political tool']}
          paragraphs={[
            'Within these pedagogical events, the use of imagination was key in starting discussions – but it was also invoked again and again by the participants as they proposed alternative city architecture(s) and ways of life, and even as they articulated their traumatic experiences with systemic oppression through story-making. The use of imagination allowed an opening up of the discussion into the countless ways in which urban policy affects our lives: from childhood to old age, from small moments to life-changing decisions.',
            'Imagination is often considered naive, or is only associated with artistic endeavours. A Monument of the City to Build, however, proposes that imagination is an invaluable political tool. On a personal level, it allows us to take a distance from painful experiences in order to understand them better, which is the first step in healing and enacting positive change. But on a collective level, imagination can shape and change understandings, challenge dominant narratives and norms. It can help us envision and propose alternative realities, possibilities, and futures that deviate from the status quo. It can allow us to consider unfamiliar perspectives and to find knowledge in experiences that had previously been discredited. In this way, imagination also fosters empathy and connections between people, and can even be essential in creating communities. For all of these reasons, imagination is fundamental in any endeavour to inspire and to drive social change.',
            'Each one of us has the right to demand and to create a better environment, a better world to live in. And that starts by allowing ourselves to imagine a better world.',
          ]}
        />
      </div>
    </div>
  </>
);

export default TheProjectPage;
