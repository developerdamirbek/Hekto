import React from 'react'

export const TrendingCard = ({img, name, price, oldPrice}) => {
  return (
    <div className=' cursor-pointer group shadow-custom pt-3 pl-3 pr-3 max-w-[270px] text-center w-[100%] pb-8'>
        <div className='bg-[#F5F6F8] p-[]28px flex h-[244px] items-center justify-center mb-4'>
            <img className='group-hover:scale-[0.8] transition-all duration-500' src={img} alt={name} />
        </div>
        <h3 className='text-[16px] text-textColor font-bold mb-2 '>{name}</h3>
        <div className='flex items-center justify-center gap-3'>
            <p className=' font-josefinSans text-[14px] text-textColor '>{price}</p>
            <strong className=' font-josefinSans text-[12px] text-[#1518754D] line-through '>{oldPrice}</strong>
        </div>
    </div>
  )
}
