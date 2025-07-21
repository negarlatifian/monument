'use-client';

import { Contribution } from '@/types';
import { Rubik } from 'next/font/google';
import Image from 'next/image';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-rubik', // CSS variable
});

interface Props {
  contribution: Contribution;
  idx: number;
  onOpen: (idx: number) => void;
}

const ContributionItem: React.FC<Props> = ({
  contribution,
  idx,
  onOpen,
}: Props) => {
  return (
    <>
      <section
        className={`${rubik.className} hidden sm:flex mt-0 sm:mt-10  flex-col`}
      >
        <span className='border-t-[0.03rem] ml-[-1.5rem] mb-4'></span>
        <div className='text-amber-400 text-[0.6rem] ml-[-1.3rem]'>
          <p>{contribution.id}</p>
        </div>
        <div className='flex flex-col sm:flex-row sm:ml-6 mt-5 '>
          <div className='flex flex-col text-[rgb(94,94,94)] sm:text-[0.7rem] text-[0.68rem] gap-1 w-[15%]'>
            <div>
              <p className='underline'>{contribution.coordinate}</p>
            </div>
            <div>
              <p>{contribution.year}</p>
            </div>
          </div>
          <div className='flex flex-col text-[0.7rem] text-[rgb(54,54,54)] sm:ml-40 sm:w-[19%] gap-2'>
            {contribution.text_en.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
          <div className='flex flex-col text-[0.7rem] text-[rgb(54,54,54)] ml-10 w-[19%] gap-2'>
            {contribution.text_sv.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
          <div className='w-[28%] flex mt-[-1.3rem] ml-10'>
            <Image
              alt={`Contribution ${contribution.id}`}
              width={800} // logical display size – adjust as needed
              height={600}
              sizes='(max-width:768px) 90vw, 800px' // responsive hints
              src={contribution.image}
              className='cursor-pointer rounded'
              onClick={() => onOpen(idx)}
            />
          </div>
        </div>
      </section>
      <section
        className={`${rubik.className} sm:hidden mt-0 sm:mt-10 flex flex-col`}
      >
        {/* border */}
        <span className='border-t-[0.03rem] ml-[-1.5rem] mb-4 mt-10'></span>
        {/* number */}
        <div className='text-amber-400 text-[0.8rem] ml-7'>
          <p>{contribution.id}</p>
        </div>
        <div className='flex flex-col text-[rgb(94,94,94)] mt-1 ml-7 text-[0.68rem] gap-1'>
          <div>
            <p className='underline'>{contribution.coordinate}</p>
          </div>
          <div>
            <p>{contribution.year}</p>
          </div>
        </div>

        {/* image */}
        <div className='w-[80%] flex ml-auto mr-auto '>
          <Image
            alt={`Contribution ${contribution.id}`}
            width={800} // logical display size – adjust as needed
            height={600}
            sizes='(max-width:768px) 90vw, 800px' // responsive hints
            src={contribution.image}
            className='cursor-pointer rounded'
            onClick={() => onOpen(idx)}
          />
        </div>
        <div className='flex flex-col sm:flex-row ml-7 mt-5 '>
          <div className='flex flex-col text-[0.7rem] text-[rgb(54,54,54)] ml-3 gap-2'>
            {contribution.text_en.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
          <div className='flex flex-col text-[0.7rem] text-[rgb(54,54,54)] ml-3 gap-2'>
            {contribution.text_sv.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContributionItem;
