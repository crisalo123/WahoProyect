export interface ItemNavbarProps {
  urlImg?: string
  name?: string
  titleMenu?: string
  path?: string
}
export type Variant = 'primary' | 'secondary'

export interface CustomItemProps {
  item: ItemNavbarProps
  variant?: Variant
  onClick?: () => void
  IconTypeText?: boolean
}
