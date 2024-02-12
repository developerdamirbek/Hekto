import React from 'react'

export const ServicesCard = ({ img: Icon, title, text }) => {
    return (
        <div className='w-[270px] pt-[56px] pb-[45px] px-[26px] text-center shadow-card'>
            <div className='flex items-center justify-center mb-[27px]'>
                <Icon />
            </div>
            <h3 className='text-[#151875] text-[22px] font-semibold mb-5 '>{title}</h3>
            <p className='text--[16px] font-bold text-[#1A0B5B4D]'>{text}</p>
        </div>
    )
}
