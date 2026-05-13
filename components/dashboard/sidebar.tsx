"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Wrench,
  LayoutDashboard,
  Users,
  Package,
  DollarSign,
  Megaphone,
  ClipboardList,
  Settings,
  BarChart3,
  ShoppingCart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Profile, UserRole, ROLE_LABELS, ROLE_COLORS } from "@/types";

interface SidebarProps {
  profile: Profile;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  roles: UserRole[];
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    roles: ["admin", "operation_manager", "finance_manager", "advertising_manager", "worker"],
  },
  {
    label: "Users",
    href: "/dashboard/users",
    icon: <Users className="h-5 w-5" />,
    roles: ["admin"],
  },
  {
    label: "Inventory",
    href: "/dashboard/inventory",
    icon: <Package className="h-5 w-5" />,
    roles: ["admin", "operation_manager", "worker"],
  },
  {
    label: "Sales",
    href: "/dashboard/sales",
    icon: <ShoppingCart className="h-5 w-5" />,
    roles: ["admin", "operation_manager", "finance_manager"],
  },
  {
    label: "Finance",
    href: "/dashboard/finance",
    icon: <DollarSign className="h-5 w-5" />,
    roles: ["admin", "finance_manager"],
  },
  {
    label: "Marketing",
    href: "/dashboard/marketing",
    icon: <Megaphone className="h-5 w-5" />,
    roles: ["admin", "advertising_manager"],
  },
  {
    label: "Tasks",
    href: "/dashboard/tasks",
    icon: <ClipboardList className="h-5 w-5" />,
    roles: ["admin", "operation_manager", "worker"],
  },
  {
    label: "Reports",
    href: "/dashboard/reports",
    icon: <BarChart3 className="h-5 w-5" />,
    roles: ["admin", "operation_manager", "finance_manager"],
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
    roles: ["admin"],
  },
];

export function DashboardSidebar({ profile }: SidebarProps) {
  const pathname = usePathname();

  const filteredNavItems = navItems.filter((item) =>
    item.roles.includes(profile.role)
  );

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Wrench className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">WorkshopMS</span>
        </Link>
      </div>

      <div className="p-4 border-b border-border">
        <div className="text-sm text-muted-foreground mb-1">Logged in as</div>
        <div className="font-medium text-foreground truncate">
          {profile.full_name || profile.email}
        </div>
        <span
          className={cn(
            "inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full",
            ROLE_COLORS[profile.role]
          )}
        >
          {ROLE_LABELS[profile.role]}
        </span>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {filteredNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
