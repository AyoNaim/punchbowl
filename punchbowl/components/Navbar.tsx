import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-amber-100 flex justify-center items-center w-screen h-20 border-b border-opacity-55'>
            <div className='w-2/3 flex justify-between items-center'>
                <div className='flex justify-between items-center gap-2'>
                    <Image src={'./logo.svg'} alt='logo' width={30} height={30} />
                    <p className='font-semibold text-lg text-gray-800'>Punchbowl</p>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <Link href={'./'} className='hover:text-gray-600'>Online Invitations</Link>
                    <Link href={'./'} className='hover:text-gray-600'>Greeting Cards</Link>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <Image src={'./search.svg'} alt='logo' width={20} height={20} />
                    <Link className='hover:text-gray-600' href={'./'}>Sign In</Link>
                </div>
            </div>
    </div>
  )
}

export default Navbar