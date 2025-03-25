import clsx from 'clsx'
import { type ForwardedRef, forwardRef, useId } from 'react'


import { FieldWrapper, type FieldWrapperPassThroughProps } from './FieldWrapper'
import { inputClasses } from './classes'

export interface InputFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    FieldWrapperPassThroughProps {
  spanClass?: string
  iconClass?: string
  wrapperClassName?: string
  onInput?: () => boolean
}

export const InputField = forwardRef(
  (
    {
      description,
      error,
      label,
      labelProps,
      className,
      wrapperClassName,
      leftIcon,
      onInput,
      spanClass,
      iconClass,
      ...restOfProps
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const innerId = useId()
    const id = restOfProps.id ?? innerId
    const descriptionId = `${id}-description`
    const errorId = `${id}-error`

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      if (onInput) {
        if (!onInput()) {
          return
        }
      }

      if (restOfProps.type === 'number') {
        const sanitizedValue = e.currentTarget.value.replace(/\D/g, '').slice(0, 10)
        e.currentTarget.value = sanitizedValue
      }

      if (restOfProps.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const isValidEmail = emailRegex.test(e.currentTarget.value)

        if (!isValidEmail) {
          console.log('Correo electrónico no válido')
        }
      }
    }

    return (
      <FieldWrapper
        className={wrapperClassName}
        description={description}
        descriptionId={descriptionId}
        error={error}
        errorId={errorId}
        iconClass={iconClass}
        label={label}
        labelProps={labelProps}
        leftIcon={leftIcon}
        spanClass={spanClass}
      >
        <input
          aria-describedby={`${descriptionId} ${errorId}`}
          className={clsx(inputClasses, className, 'input-contain')}
          ref={ref}
          {...restOfProps}
          onInput={handleInputChange}
          placeholder='input'
        />
      </FieldWrapper>
    )
  }
)

InputField.displayName = 'InputField'
