import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { Profile } from "@/types";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  // If profile doesn't exist, create one with default role
  if (!profile) {
    console.log("[v0] Profile not found for user:", user.id, "Error:", profileError);
    
    // Try to create a profile for the user
    const { data: newProfile, error: insertError } = await supabase
      .from("profiles")
      .insert({
        id: user.id,
        email: user.email,
        full_name: user.user_metadata?.full_name || "",
        role: user.user_metadata?.role || "worker",
      })
      .select()
      .single();

    if (insertError || !newProfile) {
      console.log("[v0] Failed to create profile:", insertError);
      redirect("/auth/login");
    }

    return (
      <div className="min-h-screen flex bg-secondary/30">
        <DashboardSidebar profile={newProfile as Profile} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader profile={newProfile as Profile} />
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-secondary/30">
      <DashboardSidebar profile={profile as Profile} />
      <div className="flex-1 flex flex-col">
        <DashboardHeader profile={profile as Profile} />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
