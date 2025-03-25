import clsx from 'clsx'
import type { ForwardedRef } from 'react'
import { forwardRef, useEffect, useId, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

import { inputClasses } from './classes'
import { FieldWrapper, type FieldWrapperPassThroughProps } from './FieldWrapper'

export interface Option {
  label?: string
  value: string | number | string[] | boolean | number[]
}

export interface premissions {
  id: number
  isActive: boolean
  moduleId: number
  name: string
  property: string
  parentModuleId: number
}
export interface OptionRoles {
  label?: string
  value: string | number | string[] | boolean | number[]
  premissions: premissions[]
}

export interface SelectFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    FieldWrapperPassThroughProps {
  wrapperClassName?: string
  options: Option[]
  disableStyles?: boolean
}

export const SelectField = forwardRef(
  (
    {
      description,
      error,
      label,
      labelProps,
      className,
      wrapperClassName,
      disableStyles,
      options,
      leftIcon,
      ...restOfProps
    }: SelectFieldProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    const innerId = useId()
    const id = restOfProps.id ?? innerId
    const descriptionId = `${id}-description`
    const errorId = `${id}-error`

    const [isEmpty, setIsEmpty] = useState(true)
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
      if (restOfProps.value || restOfProps.defaultValue) {
        setIsEmpty(!(restOfProps.value || restOfProps.defaultValue))
        setIsSelected(true)
      } else {
        setIsSelected(false)
      }
    }, [restOfProps.value, restOfProps.defaultValue])

    return (
      <FieldWrapper
        className={`${wrapperClassName}`}
        description={description}
        descriptionId={descriptionId}
        error={error}
        errorId={errorId}
        label={label}
        labelProps={labelProps}
        leftIcon={leftIcon}
      >
        <select
          aria-describedby={`${descriptionId} ${errorId}`}
          className={clsx(
            inputClasses,
            className,
            !isEmpty && !disableStyles && 'hide-arrow-select',
            !disableStyles && 'select-contain',
            'cursor-pointer'
          )}
          ref={ref}
          {...restOfProps}
          onBlur={(e) => {
            setIsEmpty(!e.target.value)
            setIsSelected(!!e.target.value)
          }}
        >
          <option className='text-black' hidden key={'default-option'} />
          {options.map(({ label, value }) => (
            <option
              className='text-black'
              key={`${label?.toString()}-${value}`}
              value={String(value)}
            >
              {label}
            </option>
          ))}
        </select>

        <BsChevronDown
          className={clsx('absolute right-3 text-[#9F9F9F]', 'cursor-pointer', {
            '!bottom-[12px]': !error, // Ajusta la posición normal
            'bottom-4': error,
            'text-secondary-500': isSelected
          })}
        />
      </FieldWrapper>
    )
  }
)

SelectField.displayName = 'SelectField'
