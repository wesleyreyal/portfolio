import cv from 'public/img/cv.png';
import { BaseButton } from '~/component/common/button';

export const Resume: React.FC = () => {
  const handleDownload = () => {
    // Logique pour le téléchargement du fichier
    const downloadUrl = 'public/img/cv.pdf'; // Chemin vers le fichier dans le dossier public
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
