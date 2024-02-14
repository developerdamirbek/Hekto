import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../../components/ui/button'

export const PageLink = ({name, path}) => {
  return (
    <div>
        <Link to={path}>
            <Button variant="outlined" className="rounded-3xl px-16 text-[20px] hover:bg-pink hover:text-white text-black py-2">
                {name}
            </Button>
        </Link>
    </div>
  )
}
