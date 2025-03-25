import { Modal } from "./modal"
import { cn } from '../lib/utils';
import { useGetProductAllDetaill } from "@/feature/user/services/allProduct";
import { useEffect, useState } from "react";
import { useCallback } from 'react';
import { IoMdCloseCircle } from "react-icons/io";

interface ModalProps{
  generalClass?:React.ReactNode
  isOpen: boolean
  onClose: () => void
  idProducto?: number
  showNavBar:boolean
}

interface ProductoDetal{
 id:number
  title: string,
  price: number,
  description: string,
  image: string,
  category: string
}


const ModalDetail:React.FC<ModalProps> = ({
  generalClass,
  isOpen,
  onClose,
  idProducto,
  showNavBar
}) => {
  
  const [productDetail, setProductDetail] = useState<ProductoDetal>()
   const { data } = useGetProductAllDetaill(idProducto ?? 0)
  useEffect(() => {
   if(idProducto){
    setProductDetail(data)
   }
  }, [idProducto, data])
  
  const memorizeOnclose = useCallback(() => {
      onClose()
  },[onClose])

  return (
    <Modal
    isOpen={isOpen}
    onClose={memorizeOnclose}
    className={cn(' md:h-[232px]  md:min-w-[600px] md:max-w-[640px] !border-none', generalClass)}
    >

    <div className="justify-end mx-auto flex">
    <IoMdCloseCircle  onClick={memorizeOnclose} className="h-5 w-5 absolute -mt-7  hover:cursor-pointer" />
    </div>
    <div>
     {productDetail && 
     <div>
     <h2 className="text-center font-bold -mt-5">{productDetail.title.slice(0, 40)}</h2>
     <div className="flex gap-8">
      <img src={productDetail.image} alt={productDetail.title} className=" h-28 w-28  md:h-40 md:w-40 md:-mt-4" />
              
     <p className="text-secondary-400 text-sm">{ showNavBar? productDetail.description.slice(0, 300) : productDetail.description.slice(0, 100)}
      </p>
      <p className="absolute md:mx-52  md:mt-28 mt-24 mx-32">{` Precio : ${productDetail.price}`}</p>
     </div>
     </div>    
    }   
    </div>
    </Modal>
  )
}

export default ModalDetail
