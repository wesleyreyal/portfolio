import React from 'react';
import background from '/img/background.svg';
import { LinkButton } from '~/component/common/button';

export const Home: React.FC = () => {
  return (
    <>
      <div
        className='fixed h-screen w-screen bg-center bg-cover top-0 left-0'
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className='flex flex-col items-center w-fit bg-white/30 backdrop-blur-md shadow-xl p-10 md:py-10 md:px-12 md:m-auto'>
        <h1 className='text-5xl md:text-7xl font-bold text-center'>Welcome to My Portfolio</h1>
        <p className='mt-4 text-xl text-gray-600'>Explore my projects and skills</p>
        <div className='max-w-3xl font-medium text-justify text-md sm:text-lg text-gray-800'>
          <p className='mt-8'>
            I am a third-year student pursuing a Bachelor&apos;s degree in Computer Science at the
            IUT de Reims. Alongside my academic pursuits, I have a strong passion for American
            football, music, and cooking. These diverse interests fuel my creativity and drive me to
            explore new horizons both inside and outside the realm of technology.
          </p>
          <p className='mt-4'>
            Currently, I am actively seeking an apprenticeship opportunity for the academic year
            2023-2024. My goal is to gain hands-on experience and contribute to real-world projects
            while working alongside industry professionals. I believe that this practical exposure
            will not only augment my technical expertise but also cultivate valuable teamwork and
            problem-solving skills.
          </p>
        </div>
        <div className='m-auto flex mt-6 gap-x-6 sm:justify-around sm:w-full'>
          <LinkButton text={'Explore my projects'} link={'/projects'} variant='success' />
          <LinkButton text={'See my resume'} link={'/resume'} variant='success' />
        </div>
      </div>
    </>
  );
};
