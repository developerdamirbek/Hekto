import React from 'react'
import { Link } from 'react-router-dom'

export const Hero = ({ title, page }) => {
    return (
        <div className='bg-[#F6F5FF] pt-[96px] pb-[126px]'>
            <div className="container">
                <div className='flex flex-col gap-[9px]'>
                    <h1 className=' font-josefinSans text-[36px] font-bold '>{title}</h1>
                    <div className='flex items-center gap-[6px]'>
                        <Link to="/">
                            <p className='font-medium text-[16px]'>Home </p>
                        </Link>
                        <Link to="/pages">
                            <p className='font-medium text-[16px]'>. Pages .</p>
                        </Link>
                        <p className='font-medium text-[16px] text-pink'>{page}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
