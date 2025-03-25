
import { Modal } from '@/feature/core/ui/Modal/Modal'
import { Button } from '../../ui'

interface ModalProps {
  showModal: boolean
  onSucces: () => void
  title: string
  icon: React.ReactElement
}


export const ModalActions:React.FC<ModalProps> = ({showModal, onSucces, title, icon}) => {

  return (
    <div>
       <Modal show={showModal} size='sm' className=' shadow-2xl w-full'>
        <Modal.Body>
          <div>
            <div className='flex w-96px bg-primary-50 rounded-2xl h-32 mt-4 '>
              <div className=' w-full h-full mb-6 '>
                <div className='text-black font-light'>
                  <Modal.Title >
                    <span className='text-gray-600'>{title}</span>
                  </Modal.Title>
                </div>
                <div>
                  <h1 className='font-bold text-[34px] text-primary ml-6'>
                    Crédito
                  </h1>
                </div>
              </div>
              <div>
                <div className='flex justify-center items-center h-full w-full mr-4'>
                   {icon}
                </div>
              </div>
            </div>
            <div>
              <span className='flex justify-center mt-6 mb-6'>
                ¡El registro se ha eliminado con éxito!
              </span>
            </div>

            <div className='flex w-full justify-end'>
              <div>
                <Button
                  className='w-48 bg-gradient-to-b from-[#a20f5c] to-[#d53287] text-white transition-all hover:brightness-110  duration-500'
                 onClick={() => onSucces()}
                >
                  Aceptar
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

