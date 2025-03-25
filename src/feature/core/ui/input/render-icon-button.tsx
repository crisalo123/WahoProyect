import { IconButtonProps, InputProps } from '../../types'
import { Button } from '../button'

import { cn } from '@/feature/core'

type Props = IconButtonProps & {
  icon: InputProps['icon']
}

export function RenderIconButton({ icon, ...iconButtonProps }: Props) {
  const { className, iconPosition = 'left', ...restOfProps } = iconButtonProps

  return (
    <Button
      type='button'
      className={cn(
        'absolute',
        iconButtonProps?.className,
        iconPosition == 'left' ? 'left-0' : 'right-0'
      )}
      variant={'ghost'}
      size={'icon'}
      {...restOfProps}
    >
      <span
        className={cn(
          'text-[#7E7E7E]',
          restOfProps?.asChild &&
            'absolute hover:bg-transparent hover:text-[#7E7E7E]'
        )}
      >
        {icon}
      </span>
    </Button>
  )
}
