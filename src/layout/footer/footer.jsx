import React from 'react'
import { Input } from '../../components/ui/input/input'
import { Button } from '../../components/ui/button/button'
import { footerCategories, footerPages, customerCare } from '../../data/footer-data'
import { FacebookIcon } from '../../assets/icons/facebook-icon'
import { InstagramIcon } from '../../assets/icons/instagram-icon'
import { TwitterIcon } from '../../assets/icons/twitter-icon'

export const Footer = () => {
  return (
    <footer>
      <div className=' pt-[95px] pb-[101px] bg-[#EEEFFB] '>
        <div className="container">
          <div className='flex items-start gap-[70px]'>
            <div className=''>
              <h1 className='text-[38px] font-josefinSans  font-bold mb-[31px]'>
                <a href="">Hekto</a>
              </h1>
              <form className=' relative w-[337px] mb-[25px] '>
                <Input type="email" variant="secondary" placeholder="Enter Email Address" className="w-[100%] border-2 border-transparent focus:border-2 py-[14px] text-[16px] pl-5" />
                <Button className="absolute right-[2px] rounded-md top-[2px] bottom-[2px] text-[16px] px-6 py-[5px]" type="submit">
                  Sign Up
                </Button>
              </form>
              <p className='text-[16px] text-[#8A8FB9] mb-[10px]'>Contact Info</p>
              <p className='text-[16px] text-[#8A8FB9]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div className='flex items-start justify-between gap-14'>
              <div>
                <p className='text-[22px] font-semibold font-josefinSans mb-[42px]'>Catagories</p>
                <ul className='flex flex-col gap-[21px]'>
                  {footerCategories.map((item) => (
                    <li className='text-[16px] text-[#8A8FB9]' key={item.id}>
                      <a className='hover:text-pink' href="#">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className='text-[22px] font-semibold font-josefinSans mb-[42px]'>Catagories</p>
                <ul className='flex flex-col gap-[21px]'>
                  {customerCare.map((item) => (
                    <li className='text-[16px] text-[#8A8FB9]' key={item.id}>
                      <a className='hover:text-pink' href="#">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className='text-[22px] font-semibold font-josefinSans mb-[42px]'>Catagories</p>
                <ul className='flex flex-col gap-[21px]'>
                  {footerPages.map((item) => (
                    <li className='text-[16px] text-[#8A8FB9]' key={item.id}>
                      <a className='hover:text-pink' href="#">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-[17px] bg-[#E7E4F8]'>
        <div className="container">
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-[16px] font-semibold text-[#9DA0AE]'>©Webecy - All Rights Reserved</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <div>
                <a href="https://www.facebook.com">
                <FacebookIcon/>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com">
                <InstagramIcon/>
                </a>
              </div>
              <div>
                <a href="https://www.twitter.com">
                <TwitterIcon/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
