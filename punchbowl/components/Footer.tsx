import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className='bottom-0 bg-amber-100 w-screen h-screen mt-10 flex justify-center items-center'>
        <div className='w-2/3 h-full mt-3 flex flex-col items-center gap-5'>
            <div className='w-full h-14 flex justify-between items-center'>
              <div className='flex justify-between items-center gap-3'>
                <Image src={'./appstore.svg'} alt='appstore' width={130} height={75} />
                <Image src={'./googleplay.svg'} alt='playstore' width={130} height={75} />
              </div>
              <div className='flex justify-between items-center gap-2'>
                <Image src={'./instagram.svg'} alt='instagram' width={40} height={40} />
                <Image src={'./pinterest.svg'} alt='pinterest' width={40} height={40} />
                <Image src={'./facemash.svg'} alt='facebook' width={40} height={40} />
                <Image src={'./twitter.svg'} alt='twitter' width={40} height={40} />
              </div>
            </div>
            <div className='border-b border-black border-opacity-55 w-full h-48 flex justify-between items-center gap-2'>
                <div className='w-1/3 h-full flex flex-col justify-start gap-3'>
                  <div className='text-xl font-semibold text-gray-600'>About Us</div>
                    <div className='w-full border-b border-black'></div>
                    <Link href={'./'} className='text-[14px] text-gray-700'>Company overview</Link>
                    <Link href={'./'} className='text-[14px] text-gray-700'>News</Link>
                    <Link href={'./'} className='text-[14px] text-gray-700'>Partner With Us</Link>
                </div>
                <div className='w-1/3 h-full flex flex-col justify-start gap-3'>
                <div className='text-xl font-semibold text-gray-600'>More</div>
                    <div className='w-full border-b border-black'></div>
                    <Link href={'./'} className='text-[14px] text-gray-700'>Find a Vendor</Link>
                    <Link href={'./'} className='text-[14px] text-gray-700'>Party Ideas</Link>
                    <Link href={'./'} className='text-[14px] text-gray-700'>Reasons to Celebrate</Link>
                    <Link href={'./'} className='text-[14px] text-gray-700'>Reminders</Link>
                </div>
                <div className='w-1/3 h-full flex flex-col justify-start gap-3'>
                <div className='text-xl font-semibold text-gray-600'>Get In Touch</div>
                    <div className='w-full border-b border-black'></div>
                    <Link className='text-[14px] text-gray-700' href={'./'}>Get Help</Link>
                    <Link className='text-[14px] text-gray-700' href={'./'}>Job Opportunities</Link>
                    <Link className='text-[14px] text-gray-700' href={'./'}>Accessibility</Link>
                </div>
            </div>
            <div className='w-full h-24 flex flex-col justify-center items-center gap-5'>
              <Button className='gap-2 h-11 bg-amber-100 hover:bg-amber-300' variant={'outline'}><Image src={'./wheelchair.svg'} alt='wheelchair' width={20} height={20}/>Enable Accesibility Options </Button>
              <div className='flex justify-between items-center gap-3 text-sm text-gray-700'>
                <p>© 2024 Sincere Corporation</p>
                <Link href={'./'}>Terms of use</Link>
                <Link href={'./'}>Privacy Policy</Link>
                <Link href={'./'}>Do Not Sell My Info</Link>
                <Link href={'./'}>CA Privacy Notice</Link>
              </div>
            </div>
            <div className='w-full flex justify-between items-center gap-4 flex-col text-gray-700'>
              <p className='text-[10px]'>PUNCHBOWL® is a registered trademark of Sincere Corporation. All rights reserved. All other product and company names are trademarks or registered trademarks of their respective holders.</p>
              <p className='text-[10px]'>*Amazon.com Gift Cards ("GCs") sold by Sincere Corporation, an authorized and independent reseller of Amazon.com Gift Cards. Except as required by law, GCs cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. For complete terms and conditions, see http://www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. ©, ®, ™ Amazon.com Inc. and/or its affiliates, 2024.</p>
              <div className='border-t h-12 text-gray-500'>A RAPTIVE PARTNER SITE</div>
            </div>
        </div>
    </div>
  )
}

export default Footer