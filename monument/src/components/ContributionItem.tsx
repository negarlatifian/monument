'use-client';

import { Contribution } from '@/types';
import Image from 'next/image';

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
    <section className='mt-10 flex flex-col'>
      <span className='border-t-[0.03rem] ml-[-1.5rem] mb-4'></span>
      <div className='text-amber-400 text-[0.6rem] ml-[-1.3rem]'>
        <p>{contribution.id}</p>
      </div>
      <div className='flex flex-row ml-6 mt-5 '>
        <div className='flex flex-col text-[rgb(94,94,94)] text-[0.7rem] gap-1 w-[15%]'>
          <div>
            <p className='underline'>{contribution.coordinate}</p>
          </div>
          <div>
            <p>{contribution.year}</p>
          </div>
        </div>
        <div className='flex flex-col text-[0.7rem] text-[rgb(54,54,54)] ml-40 w-[19%] gap-2'>
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
            src={`/contributions-optimized/${contribution.image}.webp`}
            alt={`Contribution ${contribution.id}`}
            width={800} // logical display size – adjust as needed
            height={600}
            sizes='(max-width:768px) 90vw, 800px' // responsive hints
            placeholder='blur'
            blurDataURL={`/contributions-optimized/thumbs/${contribution.image}.webp`}
            // src={contribution.image}
            // alt={`Contribution ${contribution.id}`}
            className='cursor-pointer rounded'
            onClick={() => onOpen(idx)}
          />
        </div>
      </div>
    </section>
  );
};

export default ContributionItem;
