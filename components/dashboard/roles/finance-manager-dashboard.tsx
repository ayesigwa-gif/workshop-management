import {
  DollarSign,
  TrendingUp,
  CreditCard,
  Receipt,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Profile } from "@/types";
import { StatCard } from "./stat-card";

interface FinanceManagerDashboardProps {
  profile: Profile;
}

export function FinanceManagerDashboard({ profile }: FinanceManagerDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Finance Overview</h2>
        <p className="text-muted-foreground">
          Track revenue, expenses, and financial reports
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Monthly Revenue"
          value="$45,231"
          change="+12.5%"
          trend="up"
          icon={<DollarSign className="h-5 w-5" />}
        />
        <StatCard
          title="Monthly Expenses"
          value="$12,450"
          change="-3.2%"
          trend="down"
          icon={<CreditCard className="h-5 w-5" />}
        />
        <StatCard
          title="Net Profit"
          value="$32,781"
          change="+18.7%"
          trend="up"
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <StatCard
          title="Pending Invoices"
          value="$3,420"
          change="8 invoices"
          trend="up"
          icon={<Receipt className="h-5 w-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Revenue by Category
          </h3>
          <div className="space-y-4">
            <RevenueBar category="Electronics" amount={12450} percentage={35} />
            <RevenueBar category="Furniture" amount={9800} percentage={28} />
            <RevenueBar category="Clothing" amount={7200} percentage={20} />
            <RevenueBar category="Books" amount={3500} percentage={10} />
            <RevenueBar category="Other" amount={2450} percentage={7} />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Recent Transactions
          </h3>
          <div className="space-y-4">
            <TransactionItem
              type="income"
              description="Electronics sale"
              amount={1250}
              date="Today, 2:30 PM"
            />
            <TransactionItem
              type="expense"
              description="Utility payment"
              amount={450}
              date="Today, 11:00 AM"
            />
            <TransactionItem
              type="income"
              description="Furniture sale"
              amount={890}
              date="Yesterday"
            />
            <TransactionItem
              type="expense"
              description="Supplies purchase"
              amount={120}
              date="Yesterday"
            />
            <TransactionItem
              type="income"
              description="Bulk clothing sale"
              amount={2100}
              date="2 days ago"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Monthly Summary
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-border">
                <th className="pb-3 text-sm font-medium text-muted-foreground">Month</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Revenue</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Expenses</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Profit</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 text-sm text-foreground">January</td>
                <td className="py-3 text-sm text-foreground">$42,500</td>
                <td className="py-3 text-sm text-foreground">$11,200</td>
                <td className="py-3 text-sm text-green-600">$31,300</td>
                <td className="py-3 text-sm text-foreground">73.6%</td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-foreground">February</td>
                <td className="py-3 text-sm text-foreground">$38,900</td>
                <td className="py-3 text-sm text-foreground">$10,800</td>
                <td className="py-3 text-sm text-green-600">$28,100</td>
                <td className="py-3 text-sm text-foreground">72.2%</td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-foreground">March</td>
                <td className="py-3 text-sm text-foreground">$45,231</td>
                <td className="py-3 text-sm text-foreground">$12,450</td>
                <td className="py-3 text-sm text-green-600">$32,781</td>
                <td className="py-3 text-sm text-foreground">72.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RevenueBar({
  category,
  amount,
  percentage,
}: {
  category: string;
  amount: number;
  percentage: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-foreground">{category}</span>
        <span className="text-sm font-medium text-foreground">
          ${amount.toLocaleString()}
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function TransactionItem({
  type,
  description,
  amount,
  date,
}: {
  type: "income" | "expense";
  description: string;
  amount: number;
  date: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-full ${
            type === "income" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {type === "income" ? (
            <ArrowUpRight className="h-4 w-4 text-green-600" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-600" />
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{description}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
      <span
        className={`text-sm font-medium ${
          type === "income" ? "text-green-600" : "text-red-600"
        }`}
      >
        {type === "income" ? "+" : "-"}${amount.toLocaleString()}
      </span>
    </div>
  );
}
