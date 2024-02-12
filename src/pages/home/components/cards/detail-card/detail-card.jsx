import React from 'react'
import { StarIcon } from '../../../../../assets/icons/star-icon'
import {Button} from '../../../../../components/ui/button'

export const DetailCard = ({ img, title, price, code }) => {
    return (
        <div className='pt-[121px] pb-[131px]'>
            <div className='container'>
                <div className='flex items-center gap-10 p-4 shadow-detail rounded-md'>
                    <div className='max-w-[400px] bg-[#F6F7FB] w-[100%] '>
                        <img className=' w-[100%] ' src={img} alt={title} />
                    </div>
                    <div className=''>
                        <h3 className=' font-josefinSans text-[36px] font-semibold text-textColor mb-3 '>{title}</h3>
                        <div className='flex items-center gap-[5px] mb-[15px]'>
                            <div>
                                <StarIcon />
                            </div>
                            <div>
                                <StarIcon />
                            </div>
                            <div>
                                <StarIcon />
                            </div>
                            <div>
                                <StarIcon />
                            </div>
                            <div>
                                <StarIcon />
                            </div>
                            <div>
                                <span className=' font-josefinSans text-textColor text-[16px] '>(22)</span>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-3'>
                            <p className=' font-josefinSans text-textColor text-[16px] '>{price}</p>
                            <p className=' font-josefinSans text-pink line-through text-[16px] '>$52.00</p>
                        </div>
                        <p className=' font-josefinSans text-[16px] font-semibold text-[#0D134E] mb-[12px] '>Color</p>
                        <div className='mb-4'>
                            <p className=' font-josefinSans text-[16px] text-[#A9ACC6] font-semibold '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum delectus sequi velit sint at eum, voluptates ex repellendus quod fuga. Molestias, dignissimos ducimus ipsa ad saepe provident explicabo eius.
                            </p>
                        </div>
                        <div>
                            <Button className="rounded-md">
                                Add To Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
