import React from 'react'
import img from '../../assets/images/404.svg'
import { Button } from '../../components/ui/button'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className='mb-[124px]'>
            <div className='bg-[#F6F5FF] pt-[96px] pb-[126px]'>
                <div className="container">
                    <div className='flex flex-col gap-[9px]'>
                        <h1 className=' font-josefinSans text-[36px] font-bold '>404 Not Found</h1>
                        <div className='flex items-center gap-[6px]'>
                            <p className='font-medium text-[16px]'>Home </p>
                            <p className='font-medium text-[16px]'>.Pages</p>
                            <p className='font-medium text-[16px] text-pink'>404 Not Found</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className='w-[100%] text-center'>
                        <div className='relative w-[100%] flex items-center justify-center'>
                            <img src={img} alt="404 not found" />
                            <p className='absolute bottom-12 font-josefinSans font-bold text-textColor text-[24px] '>oops! The page you requested was not found!</p>
                        </div>
                        <div>
                            <Link to="/">
                                <Button>
                                    Back To Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
