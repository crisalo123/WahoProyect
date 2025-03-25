
import { MdOutlineHelpCenter } from "react-icons/md";

import mariscos from '../assets/img/mariscos.png'
import langosta from '../assets/img/langosta.png'
import ostiones from '../assets/img/ostiones.jpg'


type CardProps = {
  label: string,
  icon: JSX.Element,
  
}

type CaroselProps = {
  title: string,
  label:string
  img: string,
  
}



const classsIcon = 'justify-center mx-auto h-14 w-14 md:mt-7  text-tertiary-900'

// export const dataCard: CardProps[] = [
//   {
//     label: 'Transferencias',
//     icon: <BiTransfer className={` -rotate-45  ${classsIcon} ` } />,
     
//   },

//   {
//     label: 'Pago de servicios',
//     icon: <PiHandDepositFill className={classsIcon} />,
   
//   },

//   {
//     label: 'Prestamos',
//     icon: <FaHandshake className={classsIcon} />,
   
//   },

//   {
//     label: 'Seguros',
//     icon: <FaHandHoldingHeart className={classsIcon}/>,
   
//   },

//   {
//     label: 'SuperFondos',
//     icon: <PiMoney className={classsIcon} />,
   
//   },
//   {
//     label: 'SuperFondos',
//     icon: <MdOutlineHelpCenter className={classsIcon} />,
   
//   },
// ]


export const dataCarousel: CaroselProps[] = [
  {
     title: 'Cazuela de Mariscos',
     label:'240,000',
     img: mariscos
  },
  {
    title: 'Langosta',
    label:'1,200,000',
    img: langosta
 },
 {
  title: 'Ostiones',
  label:'1,100,000',
  img: ostiones
}

]


