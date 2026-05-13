import {
  Users,
  Package,
  DollarSign,
  TrendingUp,
  AlertCircle,
  ShoppingCart,
  Megaphone,
  ClipboardList,
} from "lucide-react";
import { Profile } from "@/types";
import { StatCard } from "./stat-card";

interface AdminDashboardProps {
  profile: Profile;
}

export function AdminDashboard({ profile }: AdminDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Admin Overview</h2>
        <p className="text-muted-foreground">
          Complete system overview and management controls
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Users"
          value="24"
          change="+3 this month"
          trend="up"
          icon={<Users className="h-5 w-5" />}
        />
        <StatCard
          title="Inventory Items"
          value="1,234"
          change="+156 this week"
          trend="up"
          icon={<Package className="h-5 w-5" />}
        />
        <StatCard
          title="Monthly Revenue"
          value="$45,231"
          change="+12.5%"
          trend="up"
          icon={<DollarSign className="h-5 w-5" />}
        />
        <StatCard
          title="Sales Today"
          value="89"
          change="+23 vs yesterday"
          trend="up"
          icon={<ShoppingCart className="h-5 w-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Department Overview
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-md">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-blue-600" />
                <span className="text-foreground">Operations</span>
              </div>
              <span className="text-sm text-muted-foreground">8 active tasks</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-md">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="text-foreground">Finance</span>
              </div>
              <span className="text-sm text-muted-foreground">3 pending reports</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-md">
              <div className="flex items-center gap-3">
                <Megaphone className="h-5 w-5 text-purple-600" />
                <span className="text-foreground">Marketing</span>
              </div>
              <span className="text-sm text-muted-foreground">2 campaigns active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-md">
              <div className="flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-orange-600" />
                <span className="text-foreground">Workers</span>
              </div>
              <span className="text-sm text-muted-foreground">12 workers on shift</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <ActivityItem
              icon={<TrendingUp className="h-4 w-4 text-green-600" />}
              title="New sale completed"
              description="Vintage sofa sold for $450"
              time="2 minutes ago"
            />
            <ActivityItem
              icon={<Package className="h-4 w-4 text-blue-600" />}
              title="Inventory updated"
              description="15 new items added to electronics"
              time="1 hour ago"
            />
            <ActivityItem
              icon={<Users className="h-4 w-4 text-purple-600" />}
              title="New worker registered"
              description="John Smith joined the team"
              time="3 hours ago"
            />
            <ActivityItem
              icon={<AlertCircle className="h-4 w-4 text-amber-600" />}
              title="Low stock alert"
              description="Furniture section below threshold"
              time="5 hours ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({
  icon,
  title,
  description,
  time,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <span className="text-xs text-muted-foreground">{time}</span>
    </div>
  );
}
