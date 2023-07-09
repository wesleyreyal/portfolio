import { Card, CardPropsType } from '~/component/common/card';
import algosort from '/img/algosort.png';
import souin from '/img/souin.png';

const projects: CardPropsType[] = [
  {
    technos: ['react js', 'tailwind', 'typescript', 'vite'],
    title: 'Algo sort',
    description: [
      'An interactive platform that showcases dynamic renderings of sorting algorithms. Dive into the fascinating world of sorting algorithms and explore their functionalities through visually engaging and interactive demonstrations.',
      "It's worth noting that the project is an ongoing endeavor, and I plan to continually enhance it by introducing upgrades, new features, and addressing any identified issues. As time permits, I will be adding additional sorting algorithms and expanding the platform's capabilities. Stay tuned for future updates and improvements!",
    ],
    img: algosort,
    link: 'https://github.com/ReyalWesley/algo-sort',
  },
  {
    technos: ['docker', 'api platform', 'next js', 'react js', 'symfony', 'tailwind', 'typescript'],
    title: 'http cache',
    description: [
      'Http-cache is the Souin SaaS web UI platform. It allow users to setup and manage the Souin HTTP cache on a proxied server.',
      'I created this project during my internship with Sylvain Combraque.',
      'This project integrated me in the open-source web development and enables me to upgrade my coding skills on many aspects',
    ],
    img: souin,
    link: 'https://github.com/ReyalWesley/httpcache',
  },
  {
    technos: ['react js', 'tailwind', 'typescript', 'vite'],
    title: 'portfolio',
    description: [
      'I created this portfolio to showcase my skills and capabilities. It serves as a gallery for all of my projects and a platform to present my CV and the specific job role I am seeking.',
      'This portfolio represents a comprehensive display of my abilities and achievements. Through the project gallery, you can explore my past work and appreciate the diverse range of technologies I have utilized.',
      'I have invested significant effort and dedication into the creation of these projects, and I take great pride in presenting them here.',
    ],
    img: souin,
    link: 'https://github.com/ReyalWesley/portfolio',
  },
];

export const Projects: React.FC = () => {
  return (
    <>
      {projects.map((props, index) => {
        return <Card {...props} key={index} />;
      })}
    </>
  );
};
