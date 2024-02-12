import React from 'react'
import { HeroSlider } from './components/hero-slider'
import { FeaturedProducts } from './components/featured-products/featured-products'
import { Tab } from './components/tab/tab'
import { Card } from './components/cards/card/card'
import { products } from '../../data/products'
import { Services } from './components/services'
import { UniqueFeatures } from './components/unique-features/unique-features'
import { TrendingProducts } from './components/trending-products/trending-products'


export const Home = () => {
  return (
    <>
      <HeroSlider/>
      <section className='pt-[129px]'>
        <div className="container">
          <h2 className='section-title'>Featured Products</h2>
          <FeaturedProducts/>
          <h2 className='section-title'>Leatest Products</h2>
          <Tab/>
          <Services/>
        </div>
          <UniqueFeatures/>
          <TrendingProducts/>
      </section>
    </>
  )
}
