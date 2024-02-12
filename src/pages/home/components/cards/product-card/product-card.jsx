import React from 'react'
import { ColoredIcon } from '../../../../../assets/icons/colored-icon'
import { Button } from '../../../../../components/ui/button/button'
import { PrimaryCart } from '../../../../../assets/icons/primary-cart'
import { PrimaryHeart } from '../../../../../assets/icons/primary-heart'
import { PlusIcon } from '../../../../../assets/icons/plus-icon'
import { Link } from 'react-router-dom'

export const ProductCard = ({ img, title, code, id, price }) => {
    return (
        <div className='shadow-custom max-w-[270px] text-center group '>
            <div className='flex group relative overflow-hidden bg-[rgb(246,247,251)] items-center justify-between w-[100%] h-[236px]'>
                <div className='absolute z-10 hidden gap-[15px] top-4 left-4 group-hover:flex group-hover:items-center'>
                    <div className=' rounded-full cursor-pointer flex items-center hover:bg-[#EEEFFB] justify-center p-2'>
                        <PrimaryCart />
                    </div>
                    <div className=' rounded-full cursor-pointer flex items-center hover:bg-[#EEEFFB] justify-center  p-2'>
                        <PrimaryHeart />
                    </div>
                    <div className=' rounded-full cursor-pointer flex items-center hover:bg-[#EEEFFB] justify-center  p-2'>
                        <PlusIcon />
                    </div>
                </div>
                <img className='pt-[40px] group-hover:scale-[1.3] transition-all duration-500 px-[50px] w-[100%] h-auto object-cover ' src={img} alt={title} />
                <Link to={`/products/${id}`}>
                    <Button className="group-hover:bg-[#08D15F]  group-hover:block hidden absolute left-[50%] translate-x-[-50%] bottom-[10px] max-w-[94px] w-[100%] text-white text-[12px] py-[8px] px-[13px]  " children="View Details" />
                </Link>
            </div>
            <div className=' py-[15px] transition-all duration-400 flex items-center flex-col group-hover:text-white group-hover:bg-blue'>
                <h3 className='text-pink text-[18px] font-bold mb-3 group-hover:text-white '>{title}</h3>
                <div className='mb-3'>
                    <ColoredIcon />
                </div>
                <p className='group-hover:text-white text-[14px] font-semibold font-josefinSans mb-3 text-[#151875] '>{code}</p>
                <strong className='text-[14px] font-semibold text-[#151875] group-hover:text-white'>{price}</strong>
            </div>

        </div>
    )
}
