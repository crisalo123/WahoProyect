import { ReactNode } from 'react'



export interface SpecificAgentProps {
  fullName: string
  role: string
  ext: string
  email: string
}

export interface BaseLayoutProps {
  children: ReactNode
  className?: string
  mainClassName?: string
  header?: boolean
  navBar?: boolean
  subHeader?: boolean
  specificAgent?: SpecificAgentProps
  valueStatusAgent?: number
}
