import { Contribution } from '@/types';

interface Props {
  contribution: Contribution;
}

const ContributionItem: React.FC<Props> = ({ contribution }) => (
  <section className='border-t-[0.03rem] mb-50 flex flex-col'>
    <div>
      <p>{contribution.id}</p>
    </div>
    <div className='flex flex-row'>
      <div className='flex flex-col'>
        <div>
          <p className='underline'>{contribution.coordinate}</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContributionItem;
