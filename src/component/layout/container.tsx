import { Outlet } from 'react-router-dom';

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='container m-auto pt-32 flex flex-col gap-y-10'>
      {children}
      <Outlet />
    </div>
  );
};
