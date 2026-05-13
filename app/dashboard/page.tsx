import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Profile } from "@/types";
import { AdminDashboard } from "@/components/dashboard/roles/admin-dashboard";
import { OperationManagerDashboard } from "@/components/dashboard/roles/operation-manager-dashboard";
import { FinanceManagerDashboard } from "@/components/dashboard/roles/finance-manager-dashboard";
import { AdvertisingManagerDashboard } from "@/components/dashboard/roles/advertising-manager-dashboard";
import { WorkerDashboard } from "@/components/dashboard/roles/worker-dashboard";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!profile) {
    redirect("/auth/login");
  }

  const typedProfile = profile as Profile;

  // Render role-specific dashboard
  switch (typedProfile.role) {
    case "admin":
      return <AdminDashboard profile={typedProfile} />;
    case "operation_manager":
      return <OperationManagerDashboard profile={typedProfile} />;
    case "finance_manager":
      return <FinanceManagerDashboard profile={typedProfile} />;
    case "advertising_manager":
      return <AdvertisingManagerDashboard profile={typedProfile} />;
    case "worker":
      return <WorkerDashboard profile={typedProfile} />;
    default:
      return <WorkerDashboard profile={typedProfile} />;
  }
}
