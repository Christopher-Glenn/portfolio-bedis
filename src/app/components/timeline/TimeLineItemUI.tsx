import React from "react"

type TimeLineItemProps = {
  title: string
  subtitle: string
  year: string
  className: string
}

export function TimeLineItem({ title, subtitle, year, className }: TimeLineItemProps) {
  return (
    <div className='flex flex-row relative pb-8'>
      <div className={`absolute hover-circle border-border ${className}`} />
      <div className='flex flex-col pl-8'>
        <h2 className='font-medium text-sm sm:text-xl'>{title}</h2>
        <h3 className='pt-2 font-normal text-xs sm:text-base'>{subtitle}</h3>
      </div>
      <div className='flex border-white text-xs sm:text-base border-1 p-0.5 px-2 sm:px-3 rounded-3xl ml-auto mt-auto sm:mb-auto'>
        {year} 
      </div>
    </div>
  )
}
