import { BaseButton } from '../button';
import { AllowedBadgeLabel, Badge } from './badge';

type CardPropsType = {
  technos: AllowedBadgeLabel[];
  title: string;
  description: string[];
  img: string;
  link: string;
};

export const Card: React.FC<CardPropsType> = ({ title, description, technos, img, link }) => {
  technos.sort();
  return (
    <div className='card lg:card-side bg-base-100 shadow-lg'>
      <figure>
        <img src={img} alt='Album' className='flex-initial' />
      </figure>
      <div className='card-body flex-1'>
        <h2 className='card-title'>{title}</h2>
        {description.map((text, index) => {
          return (
            <p className='text-justify' key={index}>
              {text}
            </p>
          );
        })}
        <div className='flex flex-wrap gap-y-2'>
          {technos.map((label, index) => {
            return <Badge label={label} key={index} />;
          })}
        </div>

        <div className='card-actions justify-end mt-2'>
          <BaseButton text={'browse code'} icon={'github'} link={link} />
        </div>
      </div>
    </div>
  );
};
