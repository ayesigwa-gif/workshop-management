import {
  Package,
  ClipboardList,
  Users,
  TrendingUp,
  Truck,
  AlertCircle,
} from "lucide-react";
import { Profile } from "@/types";
import { StatCard } from "./stat-card";

interface OperationManagerDashboardProps {
  profile: Profile;
}

export function OperationManagerDashboard({ profile }: OperationManagerDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Operations Overview</h2>
        <p className="text-muted-foreground">
          Manage inventory, tasks, and workshop operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Inventory Items"
          value="1,234"
          change="+156 this week"
          trend="up"
          icon={<Package className="h-5 w-5" />}
        />
        <StatCard
          title="Active Tasks"
          value="28"
          change="5 due today"
          trend="up"
          icon={<ClipboardList className="h-5 w-5" />}
        />
        <StatCard
          title="Workers on Shift"
          value="12"
          change="+2 vs yesterday"
          trend="up"
          icon={<Users className="h-5 w-5" />}
        />
        <StatCard
          title="Items Processed"
          value="89"
          change="+15% efficiency"
          trend="up"
          icon={<TrendingUp className="h-5 w-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Inventory Status
          </h3>
          <div className="space-y-4">
            <CategoryItem name="Electronics" count={312} status="good" />
            <CategoryItem name="Furniture" count={245} status="low" />
            <CategoryItem name="Clothing" count={428} status="good" />
            <CategoryItem name="Books" count={156} status="good" />
            <CategoryItem name="Appliances" count={93} status="critical" />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Today&apos;s Tasks
          </h3>
          <div className="space-y-4">
            <TaskItem
              title="Sort incoming donations"
              assignee="Team A"
              status="in-progress"
              priority="high"
            />
            <TaskItem
              title="Price electronics batch"
              assignee="John S."
              status="pending"
              priority="medium"
            />
            <TaskItem
              title="Organize furniture section"
              assignee="Team B"
              status="completed"
              priority="low"
            />
            <TaskItem
              title="Quality check clothing"
              assignee="Sarah M."
              status="pending"
              priority="high"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Pending Shipments
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-border">
                <th className="pb-3 text-sm font-medium text-muted-foreground">ID</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Items</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Destination</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 text-sm text-foreground">#SHP-001</td>
                <td className="py-3 text-sm text-foreground">24 items</td>
                <td className="py-3 text-sm text-foreground">Store B</td>
                <td className="py-3">
                  <span className="px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded-full">
                    Preparing
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-foreground">#SHP-002</td>
                <td className="py-3 text-sm text-foreground">18 items</td>
                <td className="py-3 text-sm text-foreground">Store C</td>
                <td className="py-3">
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                    In Transit
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CategoryItem({
  name,
  count,
  status,
}: {
  name: string;
  count: number;
  status: "good" | "low" | "critical";
}) {
  const statusColors = {
    good: "bg-green-100 text-green-800",
    low: "bg-amber-100 text-amber-800",
    critical: "bg-red-100 text-red-800",
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Package className="h-4 w-4 text-muted-foreground" />
        <span className="text-foreground">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">{count} items</span>
        <span
          className={`px-2 py-1 text-xs rounded-full ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

function TaskItem({
  title,
  assignee,
  status,
  priority,
}: {
  title: string;
  assignee: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
}) {
  const statusColors = {
    pending: "bg-gray-100 text-gray-800",
    "in-progress": "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
  };

  const priorityColors = {
    low: "text-gray-500",
    medium: "text-amber-500",
    high: "text-red-500",
  };

  return (
    <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-md">
      <div>
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${priorityColors[priority]} bg-current`} />
          <span className="text-sm font-medium text-foreground">{title}</span>
        </div>
        <span className="text-xs text-muted-foreground">Assigned to: {assignee}</span>
      </div>
      <span className={`px-2 py-1 text-xs rounded-full ${statusColors[status]}`}>
        {status.replace("-", " ")}
      </span>
    </div>
  );
}
