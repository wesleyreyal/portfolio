import { Link } from 'react-router-dom';
import { BaseButton } from '../common/button';

export const Navbar: React.FC = () => {
  return (
    <div className='navbar bg-base-100 w-full shadow-md fixed z-10'>
      <div className='navbar-start'>
        <Link className='btn btn-ghost normal-case text-xl' to={'/'}>
          Reyal Wesley
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to={'/projects'} className='font-semibold text-lg'>
              Projects
            </Link>
          </li>
          <li>
            <Link to={'/about'} className='font-semibold text-lg'>
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className='navbar-end'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-white'
          >
            <li>
              <Link to={'/projects'} className='font-semibold text-lg'>
                Projects
              </Link>
            </li>
            <li>
              <Link to={'/about'} className='font-semibold text-lg'>
                About
              </Link>
            </li>
          </ul>
        </div>
        <BaseButton text='Reyal Wesley' icon='github' link='https://github.com/ReyalWesley' />
      </div>
    </div>
  );
};