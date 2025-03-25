import { Wrapper } from "@/feature/core/ui/wrapper"

import backgroundLogin from '../assets/fondoLogin.png' 
import { LoginForm } from "./login-form"
import { AuthValues } from "@/feature/core/types/user"


export const ForgotPassword = () => {

  const  handleSuccess = (values: AuthValues) =>{
    console.log(values)
  }
  return (
    <div className="min-h-screen w-auto items-center justify-center  flex "> 
    <div className='bg-primary-700 w-full h-16 absolute top-0'>
      <h1 className='text-center pt-4 text-2xl text-white font-extrabold'>WAHOO</h1></div> 
     <Wrapper className='flex h-full  items-center justify-center  md:pl-0  '>
        <div className='grid grid-cols-1   w-full  '>
          <div className="col-span-1  hidden  md:block  justify-center ">
          <picture>
            <img src={backgroundLogin} alt="backgroundLogin" className="  justify-center mx-auto w-96 pt-14 " />
          </picture>
          </div>
          <div id="Formulario" className=" col-span-1 w-[530px] mb-5  justify-center mx-auto border-[1px] rounded-md border-[#73008A] md:mt-10 2xl:mt-0">                      
           <div className="mt-10 mb-7"> 
            <h2 className="text-xl text-center ">Recuperar Cuenta</h2>
            </div>
            <LoginForm className='mx-auto w-9/12 justify-center 2xl:w-[394px] mt-5' onSuccess={handleSuccess} />
            
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

