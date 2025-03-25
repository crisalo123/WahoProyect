export interface ModalBodyProps {
  children: React.ReactNode
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return <div className='p-6 pt-2'>{children}</div>
}
