"use client"
import React from 'react'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { redirect } from "next/navigation";
import { Button } from '@/components/ui/button';

const Confirmation = async () => {
  const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabase_anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(
    supabase_url,
    supabase_anon
  );
    const {
        data: { user },
      } = await supabase.auth.getUser();
    
      if (!user) {
        return redirect("/login");
      }

    return (
        <div className='flex justify-center items-center w-screen h-screen rounded-sm'>
            <div className='w-[400px] h-[300px] bg-green-700 text-lg font-light flex justify-center items-center'>
                <p>YOU ARE LOGGED IN</p>
            </div>
        </div>
    )
}

export default Confirmation