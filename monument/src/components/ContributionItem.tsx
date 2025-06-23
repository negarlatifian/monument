import { Contribution } from '@/types';

interface Props {
  contribution: Contribution;
}

const ContributionItem: React.FC<Props> = ({ contribution }) => (
  <section className='mt-10 flex flex-col'>
    <span className='border-t-[0.03rem] ml-[-1.5rem] mb-4'></span>
    <div className='text-amber-400 text-[0.6rem] ml-[-1.3rem]'>
      <p>{contribution.id}</p>
    </div>
    <div className='flex flex-row ml-6 mt-5 '>
      <div className='flex flex-col text-[rgb(94,94,94)] text-[0.7rem] gap-1'>
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
        <img src={contribution.image} alt={`Contribution ${contribution.id}`} />
      </div>
    </div>
  </section>
);

export default ContributionItem;
