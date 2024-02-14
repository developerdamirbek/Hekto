import React from 'react'
import { Hero } from '../../components/ui/hero/hero'
import { Link } from 'react-router-dom'
import { PageLink } from './components/link'
import { pagesData } from '../../data/pages-data'

export const Pages = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className='pt-[100px] pb-[100px] flex flex-wrap gap-6'>
            {pagesData.map((item) => (
              <PageLink path={item.path} name={item.name}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
