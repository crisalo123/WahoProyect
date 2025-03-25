import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

import { Divider } from '../Divider'
import { ModalBody } from './ModalBody'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalHeaderCloseButton } from './ModalHeaderCloseButton'
import { ModalTitle } from './ModalTitle'

const sizes = {
  xs: 'max-w-md',
  sm: 'max-w-xl',
  md: 'max-w-2xl',
  lg: 'max-w-4xl ',
  xl: 'max-w-6xl',
  '2xl': 'max-w-8xl'
}

export interface ModalProps {
  show: boolean
  onClose?: () => void
  children?: React.ReactNode
  initialFocus?: React.MutableRefObject<HTMLElement | null>
  size?: keyof typeof sizes
  className?: string
}

const ModalRoot: React.FC<ModalProps> = ({
  children,
  onClose,
  show,
  initialFocus,
  size,
  className
}) => {
  return (
    <Transition appear as={Fragment} show={show}>
      <Dialog
        as='div'
        className='relative z-50'
        initialFocus={initialFocus}
        onClose={onClose || (() => null)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0   bg-blue-100  bg-opacity-70 backdrop-blur-sm' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                className={clsx(
                  `transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl w-[50%] ${className}`,
                  size ? sizes[size] : ''
                )}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  CloseButton: ModalHeaderCloseButton,
  Title: ModalTitle,
  Body: ModalBody,
  Footer: ModalFooter,
  Divider
})
