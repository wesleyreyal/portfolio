import { Outlet } from 'react-router-dom';

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='container m-auto pt-24 flex flex-col px-2 w-full overflow-x-hidden'>
      {children}
      <Outlet />
    </div>
  );
};
