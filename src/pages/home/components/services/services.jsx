import React from 'react'
import { services } from '../../../../data/services'
import { ServicesCard } from '../cards/services-card'

export const Services = () => {
    return (
        <div className='mb-[135px]'>
            <h2 className='section-title'>What Shopex Offer!</h2>
            <div className='flex items-center justify-between gap-[28px]'>
                {services.map((item) => (
                    <ServicesCard key={item.id} img={item.img} title={item.title} text={item.text} />
                ))}
            </div>
        </div>
    )
}
