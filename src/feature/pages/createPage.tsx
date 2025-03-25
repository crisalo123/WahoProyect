import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../core"
import { CreateComponent } from "../core/component"
import { BaseLayout } from "../core/ui/base-layout"


export const CreatePage = () => {
  const navigate = useNavigate()

    const { module } = useParams();

  const handleReturn = () =>{
    navigate(-1)
  }
  return (
    <BaseLayout
        header
       
        
      > 
   <div className='p-10'>
   <div>
      <Button  onClick={() => handleReturn()}  className=' rounded-md bg-gradient-to-b from-[#a20f5c] to-[#d53287] text-white transition-all hover:brightness-110'>
         Volver
      </Button>
    </div>
       <div className="mt-5">  
        <CreateComponent label={module} />
        </div>
    </div>
    </BaseLayout>
  )
}

