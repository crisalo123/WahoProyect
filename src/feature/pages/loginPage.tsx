

import { Wrapper } from '../core/ui/wrapper';
import { LoginForm } from '../auth/login';
import { AuthValues } from '../core/types/user';
import { useAuth, useAuthStore } from '../contex/AuthContext';
import { useEffect } from 'react';
import { Alert } from '../core/ui/Alert';
import { useNavigate } from 'react-router-dom';
import backgroundLogin from '../auth/assets/fondoLogin.png' 
import { Link } from '../core/ui/Link';
import logoWhite from '../auth/assets/logoWhite.png' 









export function LoginPage() {
  const {  login,error } = useAuth()
  const navigate = useNavigate()
  
  const { isAuthenticated } = useAuthStore()

  const handleSuccess = (values: AuthValues): void => {
    login(values, )
  
    }

    useEffect(() => {
      if(isAuthenticated){
        navigate('/home')
      }
       }, [isAuthenticated])
     
       if(error){
         return <div className='my-5'>
         <Alert showIcon variant='danger'>
           {error}
         </Alert>
       </div>
       }

  
  return (
   
    <div className="min-h-screen w-auto items-center justify-center  flex "> 
    <div className='bg-primary-700 w-full h-16 absolute top-0'>
      <picture className='text-center flex justify-center mt-3 '>
        <img  src={logoWhite} alt='Logo'  className='w-48 h-auto'/>
        </picture>
      </div> 
     <Wrapper className='flex h-full  items-center justify-center  md:pl-0  '>
        <div className='grid grid-cols-1  md:grid-cols-12 w-full  '>
          <div className="col-span-7  hidden   mx-auto h-full  md:flex items-center  justify-center   ">
          <picture>
            <img src={backgroundLogin} alt="backgroundLogin" className=" w-9/12 h-9/12  2xl:w-10/12 2xl:h-10/12 mx-20 2xl:mx-16 object-cover" />
          </picture>
          </div>
          <div id="Formulario" className="  lg:col-span-4 2xl:col-span-3 border-[1px] rounded-md border-[#73008A] md:mt-10 2xl:mt-0">                      
           <div className="mt-10 mb-7"> 
            <h2 className="text-xl text-center ">Iniciar Sesión</h2>
            </div>
            <LoginForm className='mx-auto w-9/12 justify-center 2xl:w-[394px] mt-5' onSuccess={handleSuccess} />
              <div className='text-center'>
                <Link aria-label='Ir al ForgotPassword' to={'/ForgotPassword'}>
                 <p>¿Olvido su contraseña</p>
                 </Link>
                 <Link aria-label='Ir al RegisterUser' to={'/RegisterUser'}>
                 <p>Registrarse</p>
                 </Link>
              </div>
            
            <div className='flex flex-col items-center text-center justify-around pb-10 mt-10'>
              <p className='text-sm opacity-75 text-primaryText-50'>
                {`© ${new Date().getFullYear()} Copyright Wahoo - Todos los derechos reservados`}
              </p>
            </div>
            
          </div>
        </div>
      </Wrapper>
      </div>
  )
}
