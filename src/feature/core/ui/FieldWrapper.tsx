import clsx from 'clsx'
import { Check } from 'tabler-icons-react'

export interface FieldWrapperProps {
  children: React.ReactNode
  className?: string
  label?: React.ReactNode
  leftIcon?: React.ReactElement
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
  errorId?: string
  error?: string
  descriptionId?: string
  description?: string
  spanClass?: string
  iconClass?: string
}

export type FieldWrapperPassThroughProps = Pick<
  FieldWrapperProps,
  'description' | 'error' | 'label' | 'labelProps' | 'leftIcon'
>

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  children,
  label,
  labelProps = {},
  className,
  description,
  descriptionId,
  error,
  errorId,
  leftIcon,
  spanClass,
  iconClass
}) => {
  const { className: labelClassName } = labelProps

  return (
    <div className={className}>
      {label ? (
        <label {...labelProps} className={clsx('relative flex', labelClassName)}>
          {children}
          <div className={clsx('absolute top-2 left-2 text-gray-400 icon', iconClass)}>
            {leftIcon}
          </div>
          <span
            className={clsx(
              'absolute top-2 left-10 transition duration-200 text-gray-400 !rounded-lg input-text',
              spanClass
            )}
          >
            {label}
          </span>
          <Check className='check hidden absolute top-3 right-2' size={20} />
        </label>
      ) : null}
      {!label ? children : null}

      {description ? (
        <span className={'block mt-1 text-sm text-gray-500'} id={descriptionId}>
          {description}
        </span>
      ) : null}

      {error ? (
        <span
          aria-live='assertive'
          className={'block text-sm text-red-500'}
          id={errorId}
          role='alert'
        >
          {error}
        </span>
      ) : null}
    </div>
  )
}
