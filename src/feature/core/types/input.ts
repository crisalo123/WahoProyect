/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonProps } from '@/feature/core/ui/button'

export interface IconButtonProps extends ButtonProps {
  iconPosition?: 'left' | 'right'
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  iconbuttonprops?: IconButtonProps
  label?: string
  anotherIcon?: React.ReactNode
  anotherIconButtonProps?: IconButtonProps
  labelClassName?: string
}

export interface Options {
  label: string
  value: string | number
}

export interface FormItemProps {
  inputType: string
  control: any
  name: string
  label: string
  subLabel?: string
  options?: Options[]
  disabled?: boolean
  defaultValue?: string | number
  noVisible?: boolean
}
