import React from 'react'
import { SubmitButton } from '@/app/login/submit-button'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { redirect } from "next/navigation";

const SignInForm = () => {
  const supabase_url = 'https://dkabkqkvvoiykaouhrvc.supabase.co';
  const supabase_anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrYWJrcWt2dm9peWthb3VocnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4OTg4MzMsImV4cCI6MjAzNDQ3NDgzM30.Zm5SUO2H4NYHbwi4XksMwWtJq7KO8YpiXFHaHj-89Mg';
  const supabase = createClient(
    supabase_url,
    supabase_anon
  )

  const signup = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const password_two = formData.get("retype-password") as string
 

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          password: password
        }
      }
    });
    if ( !error ) {
      const { data, error } = await supabase
        .from('profiles')
        .insert([{ password: password }]);
    }
    if (!error) {
      return redirect('./confirmation');
    } else  if (password != password_two ){
      return redirect('/Account?message=passwords do not match')
    } else {
      return redirect('/Account?message=Could not authenticate user')
    }

    return redirect('./confirmation')

}
  return (
    <form className="flex flex-col w-full justify-center">
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>First Name</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            name="name"
            placeholder=""
            required
            />
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>Last Name</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="name"
            name="name"
            placeholder=""
            required
            />
            <label className="text-sm" htmlFor="email">
            <p className='text-sm'>Email</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="email"
            name="email"
            placeholder=""
            required
            />
            <label className="text-sm" htmlFor="password">
            <p className='text-sm'>Password</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder=""
            required
            />
            <label className="text-sm" htmlFor="retype-password">
            <p className='text-sm'>Password</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder=""
            required
            />
            <SubmitButton
            formAction={signup}
            className="bg-green-600 rounded-md px-4 py-2 text-white mb-2"
            pendingText="Signing In..."
            >
            Sign Up
            </SubmitButton>
        </form>
  )
}

export default SignInForm