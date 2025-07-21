import { Exhibition } from '@/types';
import { Montserrat, Roboto } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // CSS variable
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto', // CSS variable
});
interface Props {
  exhibition: Exhibition;
}

export default function PublicDisplay({ exhibition }: Props) {
  return (
    <section className='flex flex-col sm:flex-row ml-10 sm:mb-20  mb-10 mt-10 text-[1.2rem] '>
      <div className='flex flex-col sm:w-[50%] w-[80%]'>
        <h1
          className={`font-bold ${roboto.className} text-[1rem] sm:text-[1.2rem]`}
        >
          {exhibition.title}
        </h1>
        <span className='border border-b-3 border-[rgb(232,230,230)] sm:mt-1 mt-3 w-[100%] sm:w-[93%]'></span>
        <p
          className={`${montserrat.className} sm:text-[0.8rem] text-[0.68rem] text-[rgb(53,53,53)] font-mont tracking-wide font-normal w-fit sm:w-[92%] mb-5 sm:mt-1 mt-3`}
        >
          {exhibition.subtitle}
        </p>
        <div className='sm:flex hidden flex-col gap-3'>
          {exhibition.desc_en &&
            exhibition.desc_en.map((desc, i) => (
              <p
                key={i}
                className='text-[0.86rem]  text-[rgb(53,53,53)] font-mont font-normal w-[90%]'
              >
                {desc}
              </p>
            ))}
        </div>
        <div className='flex sm:hidden flex-col gap-3'>
          {exhibition.desc_en &&
            exhibition.desc_en.map((desc, i) => (
              <p
                key={i}
                className='text-[0.68rem] text-[rgb(53,53,53)] font-mont font-normal w-fit'
              >
                {desc}
              </p>
            ))}
        </div>
        <div className='sm:flex hidden flex-col gap-3 mt-3'>
          {exhibition.desc_sv &&
            exhibition.desc_sv.map((desc, i) => (
              <p
                key={i}
                className='sm:text-[0.86rem] text-[rgb(186,186,186)] font-mont font-normal w-[90%]'
              >
                {desc}
              </p>
            ))}
        </div>
        <div className='sm:hidden flex flex-col gap-3 mt-3'>
          {exhibition.desc_sv &&
            exhibition.desc_sv.map((desc, i) => (
              <p
                key={i}
                className=' text-[0.68rem] text-[rgb(186,186,186)] font-mont font-normal w-fit'
              >
                {desc}
              </p>
            ))}
        </div>
      </div>
      <div className='sm:flex hidden flex-col gap-4 mt-2'>
        {exhibition.imageUrl.map((el, i) => (
          <Image
            alt={exhibition.title}
            width={800} // logical display size – adjust as needed
            height={600}
            sizes='(max-width:768px) 90vw, 800px'
            src={el}
            key={i}
          />
        ))}
      </div>
      <div className='sm:hidden flex flex-col w-[85%] justify-center gap-4 mt-5'>
        {exhibition.imageUrl.map((el, i) => (
          <Image
            alt={exhibition.title}
            width={400} // logical display size – adjust as needed
            height={300}
            sizes='(max-width:768px) 90vw, 800px'
            src={el}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}
