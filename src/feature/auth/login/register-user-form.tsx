import { Button } from '@/feature/core'
import { InputField } from '@/feature/core/ui/InputField'
import { SelectField } from '@/feature/core/ui/SelectField'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormRegisterUser, InfoRegisterUser } from './login-schema'
import { FaUser } from "react-icons/fa";



const optionTipeDocument = [
   { value: 1 , label: 'Cédula de ciudadanía' },
   { value: 2 , label: 'Cédula de extranjería' }, 
] 

const classStyle = 'hover:!border-primary-500 focus:outline-none focus:ring focus:!border-primary-500'

 interface RegisterUserFormProps{
  className: string
  onSuccess: (values: InfoRegisterUser) => void
}



export const RegisterUserForm:React.FC<RegisterUserFormProps> = ({className, onSuccess}) => {

  const { register, formState, handleSubmit} = useForm<InfoRegisterUser>({
    resolver: zodResolver(FormRegisterUser)
  })

   const { errors } = formState
  
  

  return (
    <form  className={className}  onSubmit={handleSubmit(onSuccess, (errors) => console.log(errors))}>
      <div className='grid  grid-cols-1  mt-10 md:mt-0  md:p-0 md:grid-cols-2 gap-4 '>
          <div className='col-span-1'>
            <InputField 
            {...register('nombreUsuario')}
            className={classStyle}
             error={errors.nombreUsuario?.message}
              label='Nombres'/>
          </div>
          <div className='col-span-1 '>
            <InputField 
            {...register('apellidoUsuario')}
            className={classStyle}
            error={errors.apellidoUsuario?.message}
              label='Apellidos'/>
          </div>

          <div className='col-span-1 '>
            <SelectField
            {...register('tipoIdentificacionId') }
           
            error={errors.tipoIdentificacionId?.message}
             className={classStyle}
            options={optionTipeDocument} 
              label='Tipo de documento'/>
          </div>

          <div className='col-span-1 '>
            <InputField 
              maxLength={10}
             className={classStyle}
            {...register('numberIdentification')}
             error={errors.numberIdentification?.message}
              label='Numero de identificación'/>
          </div>
          <div className='col-span-1 '>
            <InputField 
             className={classStyle}
            {...register('expeditionCedula')}
            type='date'
            error={errors.expeditionCedula?.message}
             max="2015-12-31"
              label='Expedición de Cedula'/>
          </div>
          <div className='col-span-1 '>
            <InputField
             className={classStyle}
            error={errors.correo?.message}
            {...register('correo')} 
              label='Correo'/>
          </div>

          <div className='col-span-1 '>
            <InputField 
             className={classStyle}
            error={errors.rolId?.message}
            {...register('rolId')}
              label='Rol'/>
          </div>
          <div className='col-span-1 '>
            <InputField 
             className={classStyle}
             maxLength={10}
            error={errors.telefonoUsuario?.message}
            {...register('telefonoUsuario')}
              label='Teléfono'/>
          </div>
          <div className='col-span-1 '>
            <InputField 
             className={classStyle}
            error={errors.direccionUsuario?.message}
            {...register('direccionUsuario')}
              label='Dirección'/>
          </div>
          <div className='col-span-1 '>
            <InputField 
             className={classStyle}
            error={errors.login?.message}
            {...register('login')}
              label='Login'/>
          </div>
      </div>
      <div className='flex items-center justify-around pt-10 pb-6'>
    <Button
      className='w-44 rounded-md bg-gradient-to-b from-[#a20f5c] to-[#d53287] text-white transition-all hover:brightness-110'
      type='submit' 
    > 
     <FaUser />
      Crear Usuario
    </Button>
  </div>
    </form>
  )
}
