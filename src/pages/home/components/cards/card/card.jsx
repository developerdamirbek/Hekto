import React from 'react'
import {Plus} from '../../../../../assets/icons/plus'
import {Cart} from '../../../../../assets/icons/cart'
import {Heart} from '../../../../../assets/icons/heart'
import {SaleIcon} from '../../../../../assets/icons/sale-icon'

export const Card = ({name, img, price, oldPrice}) => {
  return (
    <div className='max-w-[360px] w-[100%] group'>
      <div className='relative cursor-pointer bg-[#F7F7F7] transition-all duration-300 group-hover:bg-transparent h-[267px] flex items-center justify-center mb-4'>
        <div className='absolute hidden transition-all duration-300 group-hover:block top-[25px] left-[18px] z-10'>
          <SaleIcon/>
        </div>
        <div className='absolute hidden group-hover:flex left-4 bottom-10  flex-col gap-3'>
          <div className=' flex items-center justify-center cursor-pointer rounded-full p-[9px] hover:bg-[#EEEFFB]'>
            <Cart/>
          </div>
          <div className=' flex items-center justify-center cursor-pointer hover:bg-[#EEEFFB] rounded-full p-[9px]'>
            <Heart/>
          </div>
          <div className=' flex items-center justify-center cursor-pointer hover:bg-[#EEEFFB] rounded-full p-[9px]'>
            <Plus/>
          </div>
        </div>
        <img className='p-[50px] w-[100%] transition-all duration-700 object-cover group-hover:scale-[.8]' src={img} alt={name} />
      </div>
      <div className='flex items-center justify-between'>
        <h3 className='text-[16px] text-[#151875] font-bold border-b-2 border-b-[#EEEFFB] '>{name}</h3>
        <div className='flex items-center gap-2'>
          <p className='text-[16px] text-[#151875] font-bold'>{price}</p>
          <p className='line-through text-[16px] text-pink'>{oldPrice}</p>
        </div>
      </div>
    </div>
  )
}
