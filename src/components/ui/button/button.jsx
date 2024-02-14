import React from 'react'
import clsx from 'clsx'

export const Button = ({type, className, variant, children}) => {
  return (
    <button type={type} className={clsx(" bg-pink font-josefinSans py-[16px] inline-block px-10 ",
    {
        " bg-transparent border-pink border-2 text-black": variant == "outlined",
        " bg-transparent text-pink border-b-1 border-pink ": variant == "text"
    }, 
    className
    )} variant={variant}>
        {children}
    </button>
  )
}
