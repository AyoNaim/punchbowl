"use client"

import React, { useState, useEffect } from 'react';
import LoginForm from '@/components/LoginForm';
import Navbar from '@/components/Navbar';
import Signingoogle from '@/components/Signingoogle';
import Footer from '@/components/Footer';
import SignInForm from '@/components/SignInForm';
import Link from 'next/link';
import DesktopComponent from './Desktop';
import MobileComponent from './Mobile';

const Signin = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-screen'>
      {
        (width < 768 ? <MobileComponent /> : <DesktopComponent />)
      }
    </div>
  );
}

export default Signin;
