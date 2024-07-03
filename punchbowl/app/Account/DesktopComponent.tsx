import LoginForm from '@/components/LoginForm'
import Navbar from '@/components/Navbar'
import React from 'react'
import Signingoogle from '@/components/Signingoogle'
import Footer from '@/components/Footer'
import SignInForm from '@/components/SignInForm'
import Link from 'next/link'

const DesktopComponent = () => {
  return (
    <div className='w-screen'>
      <Navbar />
      <div className='flex justify-center items-center'>
        <div className='mt-10 flex items-center flex-col border border-opacity-65 rounded-sm w-[400px] h-[900px]'>
          <div className='w-10/12'>
          <div className='flex justify-center items-center mt-3'>
          <p className='text-[30px] text-gray-600'>Sign up</p>
          </div>
          <SignInForm />
          <div className='w-11/12 flex justify-center items-center ml-2 mt-2'>
            <p className='text-[11px] text-gray-600'>By signing up, you agree to Punchbowl’s Terms of Use and Privacy Policy. At sign up, you agree to receive occasional emails from Punchbowl. You can unsubscribe at any time.</p>
          </div>
          </div>
          <div className=' bg-gray-300 w-full h-10 flex justify-center items-center mt-3 border-t border-b'>OR</div>
          <div className='w-10/12 h-10/12 flex justify-center items-center'>
            <div className='flex flex-col justify-between gap-3 w-full mt-5'>
              <Signingoogle btnText={'Sign in with google'} icon={'google'} provider={'google'}/>
              <Signingoogle btnText={'Sign in with facebook'} icon={'meta'} provider={'facebook'}/>
              <Signingoogle btnText={'Sign in with Apple'} icon={'apple'} provider={'apple'}/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-5'>
          <Link href={'./signin'} className='text-blue-500'>Have an account? Sign in</Link>
        </div>
      <Footer />
    </div>
  )
}

export default DesktopComponent