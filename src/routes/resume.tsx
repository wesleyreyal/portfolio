import cv from '/img/cv.png';
import { BaseButton } from '~/component/common/button';
import React from 'react';

export const Resume: React.FC = () => {
  const handleDownload = () => {
    const downloadUrl = 'public/img/cv.pdf';
    window.open(downloadUrl, '_blank');
  };
  return (
    <>
      <div className='w-full flex justify-center'>
        <BaseButton onClick={() => handleDownload()} text='Dowload my resume' className='mb-6' />
      </div>
      <div className='m-auto'>
        <img src={cv} alt='' />
      </div>
    </>
  );
};
