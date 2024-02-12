import React from 'react'
import img from '../../../../assets/images/banner1.png'
import { Button } from '../../../../components/ui/button/button'

export const UniqueFeatures = () => {
    return (
        <div className='bg-[#F1F0FF] py-[15px] mb-[132px]'>
            <div className="container">
                <div className='flex items-center justify-center'>
                    <div>
                        <img src={img} alt="banner" />
                    </div>
                    <div>
                        <h2 className='max-w-[507px] w-[100%] font-josefinSans mb-[29px] text-[35px] font-bold text-textColor'>
                            Unique Features Of leatest &
                            Trending Poducts
                        </h2>
                        <div className='flex flex-col gap-[13px] mb-[38px] '>
                            <div className='flex items-center gap-[12px]'>
                                <span className='w-[11px] inline-block h-[11px] rounded-full bg-[#F52B70] '></span>
                                <p className='text-[#ACABC3] text-[16px] font-medium '>
                                    All frames constructed with hardwood solids and laminates
                                </p>
                            </div>
                            <div className='flex items-start gap-[12px]'>
                                <span className='w-[11px] inline-block mt-[10px] h-[11px] rounded-full bg-[#2B2BF5] '></span>
                                <p className='text-[#ACABC3] max-w-[461px] w-[100%] text-[16px] font-medium '>
                                    Reinforced with double wood dowels, glue, screw - nails corner
                                    blocks and machine nails
                                </p>
                            </div>
                            <div className='flex items-center gap-[12px]'>
                                <span className='w-[11px] inline-block h-[11px] rounded-full bg-[#2BF5CC] '></span>
                                <p className='text-[#ACABC3] text-[16px] font-medium '>
                                    Arms, backs and seats are structurally reinforced
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div>
                                <Button className="rounded-md">
                                    Add To Cart
                                </Button>
                            </div>
                            <div className='flex flex-col'>
                                <strong className='text-[14px] font-josefinSans font-semibold text-textColor'>B&B Italian Sofa </strong>
                                <p className='text-[14px] text-textColor'>$32.00</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
