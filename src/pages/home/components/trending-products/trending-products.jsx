import React from 'react'
import { trendingProducts } from '../../../../data/home-data'
import { TrendingCard } from '../cards/trending-card/trending-card'
import { TrendingBanner } from '../banner/trending-banner/trending-banner'

export const TrendingProducts = () => {
  return (
    <div>
      <div className="container">
        <h2 className='section-title'>Trending Products</h2>
        <div className='flex gap-7 items-start justify-between mb-10'>
          {trendingProducts[0].map((item)=> (
            <TrendingCard img={item.img} key={item.id} name={item.name} price={item.price} oldPrice={item.oldPrice}/>
          ))}
        </div>
        <div className='flex items-start justify-between gap-6'>
            <div className='flex gap-[29px]'>
              {trendingProducts[1].map((item)=> (
                <TrendingBanner key={item.id} img={item.img} name={item.name} />
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}
