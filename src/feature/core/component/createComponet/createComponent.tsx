
import { useForm } from "react-hook-form"
import { Button } from "../../ui"
import { InputField } from "../../ui/InputField"
import { SelectField } from "../../ui/SelectField"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateForm, CreateFormSchema } from "./create-schema"
import { CiSaveDown1 } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import { useLocation } from "react-router-dom"

type CreateComponentProps = {
  label:string | undefined

}

const dataEvaluacion = [
  {
    value: 1,
    label: "Calidad del Servicio",
  },
  {
    value: 2,
    label: "Tiempo de Respuesta",
  },
  {
    value: 3,
    label: "Satisfacción del Cliente",
  },
  {
    value: 4,
    label: "Eficiencia del Proceso",
  },
  {
    value: 5,
    label: "Precisión de la Información",
  },
];


export const CreateComponent:React.FC<CreateComponentProps> = ({label}) => {

  const { register, handleSubmit, formState, reset} = useForm<CreateForm>({
    resolver: zodResolver(CreateFormSchema)
  })

  const location = useLocation()

  const loactionUpdate = location.pathname.includes('/actualizarPage')

  const { errors } = formState

  const hadleReset= () => {
    reset()
  }

  return (
    <div className="mt-1">
      <h1 className="text-xl bg-primary-50 h-11 pl-2 pt-2  rounded-md">{` ${loactionUpdate ? 'Actualizar' : 'Crear'}  ${label} `}</h1>
      <form onSubmit={handleSubmit((values) => console.log(values))}> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-10 pt-14 md:border-2 p-3 border-primary-200 h-80"> 
     
      <div className="col-span-1 ">
        <InputField 
         {...register('calificacion')}
         error={errors.calificacion?.message} 
         label="Digite la calificación" />
      </div>
      <div className="col-span-1 ">
        <SelectField 
         {...register('criterio')}
         error={errors.criterio?.message} 
        options={dataEvaluacion} label="Parámetro Evaluación" />
      </div>
      <div className="col-span-1">
        <SelectField 
         {...register('parametro')}
         error={errors.parametro?.message} 
        options={dataEvaluacion} label="Criterio de Evaluación" />
      </div>
      </div>
      <div className="w-full  justify-center space-x-3 md:space-x-0 md:justify-between mx-auto flex mt-10"> 
        <div> 
      <Button onClick={hadleReset} type="button" className='w-44 h-14 rounded-md bg-gradient-to-b from-[#a20f5c] to-[#d53287] text-white transition-all hover:brightness-110'>
      <ImCancelCircle /> Cancelar 
      </Button>
      </div>
      <div>
      <Button type="submit"  className='w-44 h-14 rounded-md bg-gradient-to-b from-[#a20f5c] to-[#d53287] text-white transition-all hover:brightness-110'>
        <CiSaveDown1 /> Guardar 
      </Button>
      </div>
      
      
      </div>
      </form>
    

    </div>
  )
}

