import React from 'react'
import { Hero } from '../../components/ui/hero/hero'
import { LoginCard } from './components/login-card'

export const Login = () => {
  return (
    <div>
      <Hero title="My Account" page="My Account"/>
      <LoginCard />
    </div>
  )
}
