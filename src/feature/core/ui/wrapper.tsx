import { ReactNode } from 'react'
import { cn } from '@/feature/core/lib/utils'

interface WrapperProps {
  children: ReactNode
  className?: string
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn('mx-auto h-full w-full', className)}>{children}</div>
  )
}
