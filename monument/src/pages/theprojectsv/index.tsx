// src/pages/theproject.tsx
import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import SectionBlock from '@/components/SectionBlock';
import { urban } from '@/lib/fonts';
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
        name='description'
        content='Learn about the aims, pedagogy and political ideas behind A Monument of the City to Build.'
      />
      <link rel='icon' href='/favicon.ico' sizes='any' />
    </Head>

    <div className='sm:mt-15 mt-5 '>
      <div className='flex flex-col sm:mb-4 gap-5 items-center'>
        <section className='flex flex-col sm:flex-row sm:gap-10 sm:justify-between '>
          <div className='flex sm:flex-col flex-row sm:gap-0 '>
            <span className='hidden sm:block ml-2 mb-8 mt-[-0.9rem]'>
              <h1
                className={`hidden sm:flex text-[2.7rem] font-semibold text-[rgb(54,54,54)] ${urban.className}`}
              >
                om{' '}
              </h1>
              <h1
                className={`hidden sm:flex text-[2.7rem] font-semibold text-[rgb(54,54,54)] ${urban.className}`}
              >
                projektet
              </h1>
            </span>

            <Link
              href='/theproject'
              className={`sm:mb-20 sm:block sm:ml-2 hidden mr-5 ml-auto rounded-full w-9.5 sm:w-30 font-Montserrat text-center justify-center align-middle border-2 border-[#FECE07] p-2 sm:text-[0.86rem] sm:px-[0.01rem] sm:py-[0.02rem] text-[#363636] backdrop-blur hover:bg-[#363636] hover:text-white hover:border-black ${montserrat.variable} font-extralight tracking-widest`}
            >
              English
            </Link>
            <Link
              href='/theprojectsv'
              className=' block sm:hidden mr-5 ml-auto rounded-full w-9.5 text-center justify-center align-middle border-2 border-[#FECE07] p-2 text-[0.8rem] font-medium bg-[#FECE07] text-[#363636] backdrop-blur hover:bg-[#363636] hover:text-white hover:border-black'
            >
              EN
            </Link>
          </div>
          <article className='flex flex-col gap-6 px-10 sm:px-0 sm:w-[70%] text-[0.9rem] sm:text-[rgb(54,54,54)] sm:text-[1.18rem] font-light leading-6.5 box-content'>
            <h1 className='sm:hidden text-[1.2rem] font-medium '>
              {' '}
              Om Projektet
            </h1>
            <p>
              <i className='font-medium'>A Monument of the City to Build</i>{' '}
              [Ett monument för staden som återstår att byggas] är ett socialt
              engagerat konstnärligt projekt som utforskar politik för
              stadsboende i det svenska stadslandskapet genom idén rätt till
              staden. Genom en rad pedagogiska evenemang i Botkyrka och
              Göteborg, har över 200 deltagare hittills bidragit till projektet
              med sina tankar, reflektioner och förslag.
            </p>
            <p>
              Projektet undersöker hur successiva generationer av social,
              kulturell och ekonomisk politik har format utvecklingen av
              stadsrum i Sverige, och hur denna utveckling i sin tur påverkat
              relationen mellan invånare och deras stad.
            </p>
            <p>
              Genom att engagera både barn och vuxna från olika stadsdelar över
              hela kartan, är målet att skapa utrymmen för kollektivt tänkande
              och intersektionella möten, och bjuda in invånarna till
              diskussioner om deras relation till sin stad. På så sätt vill man
              få invånare från alla bakgrunder att inse vilket inflytande de har
              och synliggöra deras egen förmåga att kräva och skapa en bättre
              miljö att leva i.
            </p>
          </article>
        </section>
        <span className='w-[77%] border-b-3 border-b-[#FECE07] mr-5 ml-auto'></span>
      </div>
      <div className='flex flex-col ml-5 mr-auto'>
        <SectionBlock
          titles={['Rätten till', 'staden']}
          paragraphs={[
            'Begreppet rätten till staden har varit utgångspunkten för detta projekt: tanken att varje individ, oavsett bakgrund, har en inneboende rätt att inte bara fysiskt få tillgång till stadsrummet, utan också att aktivt delta i processerna för stadens styrning och utveckling, att forma den urbana miljön och upplevelsen. Detta begrepp, som myntades av sociologen Henri Lefebvre och utvecklades av filosofer som David Harvey, förespråkar öppen, rättvis och demokratisk tillgång till stadsplanering, vilket säkerställer att stadsutvecklingen gynnar alla snarare än bara ett fåtal privilegierade.',
            'Genom att öppna upp diskussionen om rätten till staden försöker detta projekt på samma sätt flytta beslutsmakten från stora institutioner, från stat och kapital, till stadens invånare. Målet är att skapa ett utrymme där invånarna kan träna sig i deltagande, ansvar och kritiskt tänkande – de grundläggande färdigheterna för ett aktivt demokratiskt medborgarskap.',
          ]}
        />
        <SectionBlock
          titles={['Pedagogiska', 'evenemang']}
          paragraphs={[
            'Baserat på denna utgångspunkt utformades projektet kring idén att skapa en plattform där barn och vuxna har utrymme att uttrycka sina önskningar för staden och ge dem verktyg och material för att förmedla sina tankar. De pedagogiska evenemangen erbjöd en särskild tid och plats där deltagarna kunde utforska sina känslor och idéer tillsammans och uttrycka sig kreativt utan att vara rädda för att misslyckas eller bli kritiserade. ',
            'Varje event inleddes med att deltagarna tillsammans tittade på olika bilder från offentliga platser, både från eventlokalens närområde och från hela staden. Deltagarna uppmanades sedan att välja en bild att arbeta med och skapa ett fotointervention eller ett textbaserat bidrag baserat på vad de vill förändra samt vad de redan gillar och känner om staden.',
            'En vanlig känsla i början av dessa evenemang var att stadsutveckling bara kan ske uppifrån och ner – att bara ett fåtal personer med institutionell makt kan forma staden. Denna känsla ledde till att deltagarnas fantasi och till och med deras vilja att engagera sig i stadsfrågor på någon nivå begränsades kraftigt. Därför använde projektet avinlärning som pedagogisk metod: deltagarna uppmuntrades att utmana sina förutfattade meningar om urbana processer och att ompröva sin relation till staden. De uppmuntrades att se sig själva som aktiva aktörer i staden och som auktoriteter över sina egna liv och erfarenheter i den urbana miljön. Genom att främja en känsla av ägande och ansvar för staden fick deltagarna möjlighet att tänka kritiskt och kreativt om urbana rum.',
          ]}
        />
        <SectionBlock
          titles={['Fantasi som', 'politiskt verktyg']}
          paragraphs={[
            'Under dessa pedagogiska evenemang var användningen av fantasin avgörande för att starta diskussioner – men den åberopades också gång på gång av deltagarna när de föreslog alternativa stadsarkitekturer och livsstilar, och även när de formulerade sina traumatiska erfarenheter av systemiskt förtryck genom berättelseskapande. Användningen av fantasi gjorde det möjligt att öppna upp diskussionen om de otaliga sätt på vilka stadspolitiken påverkar våra liv: från barndom till ålderdom, från små ögonblick till livsförändrande beslut.',
            'Fantasi anses ofta vara naivt eller förknippas bara med konstnärliga strävanden. [A Monument of the City to Build] föreslår dock att fantasi är ett ovärderligt politiskt verktyg. På ett personligt plan gör den det möjligt för oss att ta avstånd från smärtsamma upplevelser för att förstå dem bättre, vilket är det första steget mot läkning och positiv förändring. Men på en kollektiv nivå kan fantasin forma och förändra uppfattningar, utmana dominerande berättelser och normer. Den kan hjälpa oss att föreställa oss och föreslå alternativa verkligheter, möjligheter och framtider som avviker från status quo. Det kan hjälpa oss att få syn på okända perspektiv och finna kunskap i erfarenheter som tidigare har avfärdats. På så sätt främjar fantasin också empati och kontakter mellan människor, och kan till och med vara avgörande för att skapa samhälleliga gemenskaper. Av alla dessa skäl är fantasi grundläggande i varje strävan att inspirera och driva på social förändring.',
            'Var och en av oss har rätt att kräva och skapa en bättre miljö, en bättre värld att leva i. Och det börjar med att vi tillåter oss själva att föreställa oss en bättre värld.',
          ]}
        />
      </div>
    </div>
  </>
);

export default TheProjectPage;
