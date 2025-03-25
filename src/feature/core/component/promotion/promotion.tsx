import React from 'react'
import { SearchComponent } from '../searchComponent/searchComponent'
import regatta from '../../../core/assets/img/regatta.png'
import promotion from '../../../core/assets/img/imgTwoPromotion.png'

export const Promotion = () => {
  return (
    <div>
       <div className='bg-primary-50 h-12 p-2 rounded-md mr-4 ml-4 mt-5'> 
        <h1 className='w-full text-lg '>Promociones y descuentos especiales</h1>
        </div>
        <div className='grid  grid-cols-1 md:grid-cols-3 gap-4 justify-center mx-auto mt-5'>
            <div className='col-span-1'> 
            <picture>
                <img src={regatta} alt='regatta' className='w-11/12 h-auto' />
            </picture>
            </div>
            <div className='text-center w-52  col-span-1 justify-center mx-auto '> 
             <span className='text-center font-medium' >Promociones en  <br /> la Regatta en:
                Camarones <br />
                Langostas <br />
                Ostiones <br />
                Cazuelas de Mariscos

             </span>
             </div>
              <div className='col-span-1 '>
             <picture>
                <img src={promotion} alt='promotion' className=' hidden md:block md:absolute mx-10 w-60 -my-4' />
            </picture>
            </div>
            </div>
        <div className='bg-primary-50 h-16 p-2 rounded-md mr-4 ml-4 mt-5  '>  
             <SearchComponent  onSearch={(values) => {
               console.log(values)
            }} label={'Categorías +  | Ofertas | Mís Compras'} />
            
            </div>
       </div>

   
  )
}

