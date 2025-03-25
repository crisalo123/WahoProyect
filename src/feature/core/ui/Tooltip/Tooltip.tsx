import type { ReactNode } from 'react'
import React from 'react'

interface TooltipProps {
  children: ReactNode
  text: string
  position?: string
  className?: string
  textClass?: string
  right?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  className,
  textClass,
  right
}) => {
  return (
    <div className={'group relative inline-block !w-fit'}>
      {children}
      <span
        className={`tooltipText invisible !absolute ${right} 
        bottom-[50%] z-10 whitespace-nowrap rounded-xl bg-[#0D2666] 
        p-2 px-4  text-xs font-normal text-white shadow-md transition group-hover:visible ${textClass}`}
      >
        {text}
      </span>
      <div
        className={`invisible absolute bottom-[125%] right-[150%] h-[15px] 
        w-[15px] translate-x-10 rotate-45  transform bg-[#0D2666] group-hover:visible ${className}`}
      />
    </div>
  )
}

export default Tooltip
