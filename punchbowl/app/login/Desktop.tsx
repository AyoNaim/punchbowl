import LoginForm from '@/components/LoginForm'
import Navbar from '@/components/Navbar'
import React from 'react'
import Signingoogle from '@/components/Signingoogle'
import Footer from '@/components/Footer'
import FooterMobile from '@/components/FooterMobile'
import NavMobile from '@/components/NavMobile'
import Link from 'next/link'

const Signin = () => {
  return (
    <div className='w-screen'>
      <Navbar />
      <div className='flex justify-center items-center'>
        <div className='mt-10 flex items-center flex-col border rounded-sm w-[400px] h-[600px]'>
          <div className='w-10/12'>
          <div className='flex justify-center items-center mt-3'>
          <p className='text-[30px] text-gray-600'>Sign in with Email</p>
          </div>
          <LoginForm />
          </div>
          <div className=' bg-gray-200 w-full h-10 flex justify-center items-center mt-3 border-t border-b'>OR</div>
          <div className='w-10/12 h-10/12 flex justify-center items-center'>
            <div className='flex flex-col justify-between gap-3 w-full mt-6'>
              <Signingoogle btnText={'Sign in with google'} icon={'google'} provider={'google'} />
              <Signingoogle btnText={'Sign in with facebook'} icon={'meta'} provider={'facebook'} />
              <Signingoogle btnText={'Sign in with Apple'} icon={'apple'} provider={'apple'} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-5'>
          <Link href={'./create'} className='text-blue-500'>Need an account? Sign up</Link>
        </div>
        {/* {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )} */}
      <Footer />
    </div>
  )
}

export default Signin