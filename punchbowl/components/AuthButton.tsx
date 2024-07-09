import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase_url = 'https://dkabkqkvvoiykaouhrvc.supabase.co';
  const supabase_anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrYWJrcWt2dm9peWthb3VocnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4OTg4MzMsImV4cCI6MjAzNDQ3NDgzM30.Zm5SUO2H4NYHbwi4XksMwWtJq7KO8YpiXFHaHj-89Mg';
  const supabase = createClient(
    supabase_url,
    supabase_anon
  )

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
