'use client'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Link from 'next/link'


const ButtonIcon = () => {
  return (
    <Link href={'./Account'} className='w-full h-12'>
    <Button variant={'secondary'} className='bg-green-500 hover:bg-green-600 w-full h-12 text-white flex justify-center items-center gap-3'>
        <Image src={'./mail.svg'} alt='mail' width={25} height={25} />
        <p className='text-lg font-light'>Sign up with email</p>
    </Button>
    </Link>
  )
}

export default ButtonIcon