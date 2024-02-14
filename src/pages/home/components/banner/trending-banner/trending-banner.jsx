import React from 'react'
import { Button } from '../../../../../components/ui/button/button'

export const TrendingBanner = ({ img, name }) => {
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <Button type="submit" className={'text-pink '} variant="text">
                    Shop Now
                </Button>
            </div>
        </div>
    )
}
