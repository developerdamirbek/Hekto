import React from 'react'
import { HeartIcon } from '../../../../assets/icons/heart-icon'
import { Link } from 'react-router-dom'

export const Wishlist = () => {
    return (
        <div className='flex items-center gap-1'>
            <div className='text-white font-semibold text-[16px]'>
                <Link to="/wishlist">
                    Wishlist
                </Link>
            </div>
            <HeartIcon />
        </div>
    )
}
