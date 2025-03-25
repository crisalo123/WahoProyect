import { Button } from '@/feature/core';
import { InputField } from '@/feature/core/ui/InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser } from "react-icons/fa";

import { FaEye } from "react-icons/fa";
import { Login, loginSchema } from './login-schema';
import { useLocation } from 'react-router-dom';


export interface LoginFormProps{
  className: string
  onSuccess: (values: Login) => void
}


export const LoginForm:React.FC<LoginFormProps> = ({className, onSuccess}) => {

  const location = useLocation()
 
  
  const { formState, handleSubmit, register,} = useForm<Login>({
    resolver: zodResolver(loginSchema)
  }) 

  const { errors } = formState

  const [showPassword, setShowPassword] = useState<boolean>(false) 

  const locationFotogotPassword = location.pathname === '/ForgotPassword'
 

  return (
    <form className={className}  onSubmit={handleSubmit(onSuccess, (errors) => console.log(errors))} > 
    <div className='grid grid-col-1 gap-12  '>
      <div className='col-span-1 '>
        <InputField 
         type='number'
          label='Número de documento'
         {...register('numberIdentification')}
          className='text-sm rounded-md '
          error={errors.numberIdentification?.message}
        
        />
      </div>
      <div className={`col-span-1 ${locationFotogotPassword ? 'hidden' : ''}`}>
        <InputField 
        type={showPassword ? 'text' : 'password'}
          label='Contraseña'
         {...register('password')}
          className='text-sm rounded-md'
          error={errors.password?.message}
         leftIcon={
            <FaEye className='hover:cursor-pointer text-primary-200 hover:text-primary-800' onClick={() => setShowPassword(!showPassword)} />
         }
         iconClass=' mt-1 mx-60 md:mx-72 2xl:mx-[360px]'
        />
       
      </div>
     
      </div> 
    
    <div className='flex items-center justify-around pt-10 pb-6'>
    <Button
    className='w-44 rounded-md bg-gradient-to-b from-[#a20f5c] to-[#d53287] text-white transition-all hover:brightness-110'
    type='submit' 
  > 
    <FaUser />
    <span>{locationFotogotPassword ? 'Recuperar Cuenta' : 'Ingresar'}</span>
  </Button>
  </div>
    
    </form>
  )
}
