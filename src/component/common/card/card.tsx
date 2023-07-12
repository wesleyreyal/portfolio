import { LinkButton } from '../button';
import { AllowedBadgeLabel, Badge } from './badge';
import React from 'react';
import { Link } from 'react-router-dom';

export type CardPropsType = {
  technos: AllowedBadgeLabel[];
  title: string;
  description: string[];
  img: string;
  link: string;
  gitLink: string;
};

export const Card: React.FC<CardPropsType> = ({
  title,
  description,
  technos,
  img,
  gitLink,
  link,
}) => {
  technos.sort();
  return (
    <div className='card lg:card-side bg-base-100 shadow-lg'>
      <figure className='max-w-2xl m-auto'>
        <img src={img} alt='Album' className='flex-initial' />
      </figure>
      <div className='card-body flex-1'>
        <Link to={link}>
          <h2 className='card-title'>{title}</h2>
        </Link>
        {description.map((text, index) => {
          return (
            <p className='text-justify' key={index}>
              {text}
            </p>
          );
        })}
        <div className='flex flex-wrap gap-y-2 mt-4'>
          {technos.map((label, index) => {
            return <Badge label={label} key={index} />;
          })}
        </div>

        <div className='card-actions justify-end mt-2'>
          <LinkButton text={'browse code'} icon={'github'} link={gitLink} blank />
        </div>
      </div>
    </div>
  );
};
