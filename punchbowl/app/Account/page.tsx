"use client"

import React, { useState, useEffect } from 'react';
import LoginForm from '@/components/LoginForm';
import Navbar from '@/components/Navbar';
import Signingoogle from '@/components/Signingoogle';
import Footer from '@/components/Footer';
import SignInForm from '@/components/SignInForm';
import Link from 'next/link';
import DesktopComponent from './DesktopComponent';
import MobileComponent from './MobileComponent';

const Account = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width
    setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    // remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-screen'>
      {
        width < 768 ? <MobileComponent /> : <DesktopComponent />
      }
    </div>
  );
}

export default Account;
