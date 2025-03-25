import Icons from '@/feature/auth/assets/svg-icons'
import { TextIconProps } from '@/feature/core/types/icon'

export const TextIcon: React.FC<TextIconProps> = ({
  icon = 'Home',
  fill,
  size
}) => {
  const Icon = Icons[icon as keyof typeof Icons]
  return <Icon fill={fill} size={size} />
}
