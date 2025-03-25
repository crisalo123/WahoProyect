

import { useNavigate } from 'react-router-dom';
import { cn } from '../lib'
import { BaseLayoutProps } from '../types/base-layout'
import { Navbar } from './navbar'
import { Wrapper } from './wrapper'
import { IoMdPower } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAuth } from '@/feature/contex/AuthContext';

import logoWhite from '@/feature/auth/assets/logoWhite.png'
import dayjs from 'dayjs';


export function BaseLayout({
  children,
  className = '',
  mainClassName = '',
  header,
  navBar = true,
}: Readonly<BaseLayoutProps>) {

  // const { user } = useAuthStore();
  const date = new Date()
   const dateRep = ( dayjs(date).format('YYYY'))

  const { logout } = useAuth();

  const navigation = useNavigate();

  const handleNavigate = () => {
    navigation('/home'); 
  } 

  const handleLogout = () => {  
    logout();
    navigation('/login');
  }

  return (
    <div className={cn('relative flex min-h-screen bg-primary-50/15', className)}>
       {navBar && (  <Navbar /> )}
      <div className='flex w-full flex-col '>
        {header && (
          <div className='bg-primary-700 h-20 '> 
           <button onClick={() => handleNavigate()} className='mx-auto flex justify-center mt-3 cursor-pointer' role='button' tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNavigate(); }}>
              <img  src={logoWhite} alt='Logo'  className='w-48 h-auto'/>
           </button>
           <div className='flex justify-end '>
           <IoMdPower onClick={() => handleLogout()}  className='text-white w-7 h-7 absolute top-6 2xl:top-8 mx-5 hover:text-gray-500 cursor-pointer' />
           </div>

           <div className='flex justify-end '>
           <IoIosNotificationsOutline  className='text-white w-7 h-7 absolute top-6 2xl:top-8 mx-16 hover:text-gray-500 cursor-pointer' />
           </div>
          </div>
        )}
        <Wrapper>
          <main
            className={cn(
              'h-auto w-full overflow-y-auto ',
              mainClassName
            )}
          >
            {children}
          </main>

         
        </Wrapper>
        <div className='bg-primary-100 h-32 text-center '>
           <p className='mt-3'>Wahoo</p>
           <p>{dateRep}</p>
           <small>Todos los derechos reservados</small>
          </div>
      </div>
    </div>
  )
}
