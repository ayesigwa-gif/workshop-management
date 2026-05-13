import {
  ClipboardList,
  Package,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Profile } from "@/types";
import { StatCard } from "./stat-card";

interface WorkerDashboardProps {
  profile: Profile;
}

export function WorkerDashboard({ profile }: WorkerDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">My Dashboard</h2>
        <p className="text-muted-foreground">
          View your tasks, processed items, and daily progress
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="My Tasks Today"
          value="8"
          change="3 completed"
          trend="up"
          icon={<ClipboardList className="h-5 w-5" />}
        />
        <StatCard
          title="Items Processed"
          value="42"
          change="+12 today"
          trend="up"
          icon={<Package className="h-5 w-5" />}
        />
        <StatCard
          title="Hours Worked"
          value="6.5h"
          change="1.5h remaining"
          trend="up"
          icon={<Clock className="h-5 w-5" />}
        />
        <StatCard
          title="Efficiency Rate"
          value="94%"
          change="+2% vs avg"
          trend="up"
          icon={<CheckCircle2 className="h-5 w-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            My Assigned Tasks
          </h3>
          <div className="space-y-3">
            <TaskCard
              title="Sort electronics donations"
              description="Process incoming electronics from donation box A"
              priority="high"
              status="in-progress"
              dueTime="2:00 PM"
            />
            <TaskCard
              title="Price vintage clothing"
              description="Add price tags to sorted vintage clothing batch"
              priority="medium"
              status="pending"
              dueTime="4:00 PM"
            />
            <TaskCard
              title="Organize book section"
              description="Alphabetize and organize fiction book section"
              priority="low"
              status="pending"
              dueTime="5:00 PM"
            />
            <TaskCard
              title="Quality check furniture"
              description="Inspect 5 furniture items for damage"
              priority="medium"
              status="completed"
              dueTime="11:00 AM"
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Today&apos;s Progress
          </h3>
          <div className="space-y-6">
            <ProgressItem label="Tasks Completed" current={3} total={8} />
            <ProgressItem label="Items Sorted" current={28} total={40} />
            <ProgressItem label="Items Priced" current={14} total={25} />

            <div className="pt-4 border-t border-border">
              <h4 className="text-sm font-medium text-foreground mb-3">
                Recent Activity
              </h4>
              <div className="space-y-2">
                <ActivityItem
                  action="Completed task"
                  detail="Quality check furniture"
                  time="11:30 AM"
                />
                <ActivityItem
                  action="Processed items"
                  detail="12 electronics items sorted"
                  time="10:45 AM"
                />
                <ActivityItem
                  action="Started shift"
                  detail="Clocked in"
                  time="9:00 AM"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Inventory Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickActionButton
            icon={<Package className="h-6 w-6" />}
            label="Add Item"
          />
          <QuickActionButton
            icon={<ClipboardList className="h-6 w-6" />}
            label="View Tasks"
          />
          <QuickActionButton
            icon={<CheckCircle2 className="h-6 w-6" />}
            label="Mark Complete"
          />
          <QuickActionButton
            icon={<AlertCircle className="h-6 w-6" />}
            label="Report Issue"
          />
        </div>
      </div>
    </div>
  );
}

function TaskCard({
  title,
  description,
  priority,
  status,
  dueTime,
}: {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
  dueTime: string;
}) {
  const priorityColors = {
    low: "bg-gray-100 text-gray-800",
    medium: "bg-amber-100 text-amber-800",
    high: "bg-red-100 text-red-800",
  };

  const statusColors = {
    pending: "border-l-gray-400",
    "in-progress": "border-l-blue-500",
    completed: "border-l-green-500",
  };

  return (
    <div
      className={`p-4 bg-secondary/50 rounded-lg border-l-4 ${statusColors[status]} ${
        status === "completed" ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h4
          className={`text-sm font-medium text-foreground ${
            status === "completed" ? "line-through" : ""
          }`}
        >
          {title}
        </h4>
        <span className={`px-2 py-0.5 text-xs rounded-full ${priorityColors[priority]}`}>
          {priority}
        </span>
      </div>
      <p className="text-xs text-muted-foreground mb-2">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock className="h-3 w-3" />
          Due: {dueTime}
        </span>
        {status === "completed" && (
          <CheckCircle2 className="h-4 w-4 text-green-600" />
        )}
      </div>
    </div>
  );
}

function ProgressItem({
  label,
  current,
  total,
}: {
  label: string;
  current: number;
  total: number;
}) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-foreground">{label}</span>
        <span className="text-sm text-muted-foreground">
          {current}/{total}
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ActivityItem({
  action,
  detail,
  time,
}: {
  action: string;
  detail: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div>
        <span className="text-foreground">{action}</span>
        <span className="text-muted-foreground"> - {detail}</span>
      </div>
      <span className="text-xs text-muted-foreground">{time}</span>
    </div>
  );
}

function QuickActionButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
      <div className="text-primary">{icon}</div>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </button>
  );
}
