export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className='container m-auto pt-24 flex flex-col gap-y-10'>{children}</div>;
};
