import { useLocation, useNavigate } from 'react-router-dom'
import { CustomItemProps } from '../../types'
import { TextIcon } from '../text-icon'

import logo from '@/feature/auth/assets/logoType.png'


export const CustomItem = ({
  item,
  variant = 'primary',
  onClick,
  IconTypeText = false
}: CustomItemProps) => {
  const variants = {
    primary: {
      button: 'h-[54px]',
      btnActive: '!bg-[#FFF6EB] text-md !font-bold',
      text: 'text-md text-primary-500',
      textActive: 'font-medium !text-primary',
      iconActive: '#FF9302',
      iconBgActive: '!bg-secondary-300'
    },
    secondary: {
      button: 'h-[46px] ml-5',
      btnActive: '',
      text: 'text-primary-500 font-medium text-xs',
      textActive: '',
      iconActive: '#345BB0',
      iconBgActive: ''
    }
  }
  const selectedVariant = variants[variant]
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const pathValue = searchParams.get('path')
  const isPathActive = pathValue === 'home'

  const isActive =
    `${item?.path}` === '/' && !isPathActive
      ? `${item?.path}` === decodeURIComponent(location.pathname)
      : decodeURIComponent(location.pathname).startsWith(`${item?.path}`)

  const navigate = useNavigate()
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (item.path) {
      navigate(`/${item.path}`)
    }
  }

  return (
    <button
      className={`flex w-full items-center gap-3 rounded-[10px] bg-transparent pl-5 hover:bg-primary-200
        ${selectedVariant.button}  ${selectedVariant.text}
        ${item.path && isActive && selectedVariant.textActive}
        ${item.path && isActive && selectedVariant.btnActive}`}
      onClick={handleClick}
    >
      <h1
        className={`flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-quaternary ${isActive && selectedVariant.iconBgActive}`}
      >
        {IconTypeText && item.urlImg !== '' ? (
          <TextIcon
            icon={item?.urlImg}
            fill={isActive ? '#FFFFFF' : selectedVariant.iconActive}
            size={23}
          />
        ) : (
          <img
            src={logo}
            alt='icon'
            className='h-5 w-5'
          />
        )}
      </h1>
      {item?.name ?? item?.titleMenu}
    </button>
  )
}
