import React from 'react'
import { Link } from 'react-router-dom'
import { UserIcon } from '../../../../assets/icons/user-icon'

export const Login = () => {
    return (
        <div className='flex items-center gap-1'>
            <div className='text-white font-semibold text-[16px]'>
                <Link to="/login">
                    Login
                </Link>
            </div>
            <UserIcon />
        </div>
    )
}
