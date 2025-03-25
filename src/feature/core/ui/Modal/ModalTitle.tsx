import { Dialog } from '@headlessui/react'
import React from 'react'

export interface ModalTitleProps {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ as = 'h3', children }) => {
  return (
    <Dialog.Title
      as={as}
      className='text-2xl font-semibold ml-6 mt-10 leading-6 text-secondary  w-20 text-[#E83D20;]'
    >
      {children}
    </Dialog.Title>
  )
}
