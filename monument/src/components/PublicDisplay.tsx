import { Exhibition } from '@/types';
import Image from 'next/image';

interface Props {
  exhibition: Exhibition;
}

export default function PublicDisplay({ exhibition }: Props) {
  return (
    <section className='flex flex-row ml-10 mb-20 mt-10 text-[1.2rem] '>
      <div className='flex flex-col w-[50%]'>
        <h1 className='font-bold'>{exhibition.title}</h1>
        <span className='border border-b-3 border-[rgb(232,230,230)] mt-3 w-[95%]'></span>
        <p className='text-[0.88rem]  text-[rgb(53,53,53)] font-mont tracking-wider font-normal w-[92%] mb-5'>
          {exhibition.subtitle}
        </p>
        <div className='flex flex-col gap-3'>
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
        <div className='flex flex-col gap-3 mt-3'>
          {exhibition.desc_sv &&
            exhibition.desc_sv.map((desc, i) => (
              <p
                key={i}
                className='text-[0.86rem]  text-[rgb(186,186,186)] font-mont font-normal w-[90%]'
              >
                {desc}
              </p>
            ))}
        </div>
      </div>
      <div className='flex flex-col  gap-4 mt-2'>
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
    </section>
  );
}
