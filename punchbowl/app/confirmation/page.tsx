"use client"
import React from 'react'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { redirect } from "next/navigation";
import { Button } from '@/components/ui/button';

const Confirmation = async () => {
    const supabase_url = 'https://dkabkqkvvoiykaouhrvc.supabase.co';
    const supabase_anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrYWJrcWt2dm9peWthb3VocnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4OTg4MzMsImV4cCI6MjAzNDQ3NDgzM30.Zm5SUO2H4NYHbwi4XksMwWtJq7KO8YpiXFHaHj-89Mg';
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