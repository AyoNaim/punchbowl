import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";



// const signupwithoauth = async () => {
//   const supabase_url = 'https://dkabkqkvvoiykaouhrvc.supabase.co';
//   const supabase_anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrYWJrcWt2dm9peWthb3VocnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4OTg4MzMsImV4cCI6MjAzNDQ3NDgzM30.Zm5SUO2H4NYHbwi4XksMwWtJq7KO8YpiXFHaHj-89Mg';
//   const supabase = createClient(
//     supabase_url,
//     supabase_anon
//   );

//   const { error } = await supabase.auth.signInWithOAuth({
//     provider: 'apple'
//   });
//   if (!error) {
//     redirect('./')
//   }
// }

const Signingoogle = ({ btnText, icon, provider }) => {
  const signupwithoauth = async () => {
    const supabase_url = 'https://dkabkqkvvoiykaouhrvc.supabase.co';
    const supabase_anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrYWJrcWt2dm9peWthb3VocnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4OTg4MzMsImV4cCI6MjAzNDQ3NDgzM30.Zm5SUO2H4NYHbwi4XksMwWtJq7KO8YpiXFHaHj-89Mg';
    const supabase = createClient(
      supabase_url,
      supabase_anon
    );
  
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider
    });
    if (!error) {
      redirect('./')
    }
  }
  
  return (
    <button
    onClick={signupwithoauth}
      type="button"
      className="login-with-google-btn border border-opacity-50 w-full h-14 flex justify-start gap-4 items-center hover:bg-slate-500"
    >
      <Image src={`${icon}.svg`} alt="provider" width={30} height={30} />
      <p className="text-md font-thin text-gray-600">{btnText}</p>
    </button>
  );
};

export default Signingoogle;