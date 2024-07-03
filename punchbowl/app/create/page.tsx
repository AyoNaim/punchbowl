"use client"

import LoginForm from '@/components/LoginForm'
import Navbar from '@/components/Navbar'
import React, {useState, useEffect} from 'react'
import Signingoogle from '@/components/Signingoogle'
import Footer from '@/components/Footer'
import SignInForm from '@/components/SignInForm'
import Link from 'next/link'
import DesktopComponent from './DesktopComponent'
import MobileComponent from './MobileComponent'

const Signin = () => {
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  
    return () => { window.removeEventListener('resize', handleResize)}
  }, [])
  
  return (
    <div className='w-screen'>
      {
        width < 768 ? (<MobileComponent />) : <DesktopComponent />
      }
    </div>
  )
}

export default Signin