import React from 'react'
import { SubmitButton } from '@/app/login/submit-button'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';


const LoginForm = () => {
  const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabase_anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(
    supabase_url,
    supabase_anon
  );

const signin = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
    if (!error) {
      redirect('./confirmation')
    } else {
      return redirect('/login?message=Could not authenticate user');
    }
    redirect('./confirmation');
    // redirect('./protected');
  // const { data, error } = await supabase.auth.signInWithOtp({
  //   email: 'ayonaim101@gmail.com',
  //   options: {
  //     emailRedirectTo: './protected'
  //   }
  // });
  // redirect('./protected');
}


  return (
    <form className="flex flex-col w-full justify-center relative">
            <label className="text-sm" htmlFor="email">
            <p className='text-sm'>Email</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder=""
            required
            />
            <label className="text-sm" htmlFor="password">
            <p className='text-sm'>Password</p>
            </label>
            {/* <Link href={'./'} className='text-sm font-light absolute top-8 left-56 text-blue-400'>Forgot Password</Link> */}
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder=""
            required
            />
            <SubmitButton
            formAction={signin}
            className="bg-green-600 rounded-md px-4 py-3 text-white text-lg mb-2"
            pendingText="Signing In..."
            >
            Sign In
            </SubmitButton>
        </form>
  )
}

export default LoginForm