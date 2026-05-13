"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function FinancePage() {
  const monthlyData = [
    { month: "Jan", revenue: 45000, expenses: 28000, profit: 17000 },
    { month: "Feb", revenue: 52000, expenses: 31000, profit: 21000 },
    { month: "Mar", revenue: 48000, expenses: 29000, profit: 19000 },
    { month: "Apr", revenue: 61000, expenses: 35000, profit: 26000 },
    { month: "May", revenue: 55000, expenses: 32000, profit: 23000 },
  ];

  const transactions = [
    { id: 1, date: "2024-05-10", description: "Engine Block Sale", type: "Income", amount: 900.00 },
    { id: 2, date: "2024-05-09", description: "Supplier Payment", type: "Expense", amount: -2500.00 },
    { id: 3, date: "2024-05-08", description: "Parts Sale", type: "Income", amount: 480.00 },
  ];

  const totalRevenue = monthlyData.reduce((sum, m) => sum + m.revenue, 0);
  const totalExpenses = monthlyData.reduce((sum, m) => sum + m.expenses, 0);
  const totalProfit = totalRevenue - totalExpenses;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Financial Management</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Revenue</div>
          <div className="text-2xl font-bold text-green-600">${totalRevenue.toLocaleString()}</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Expenses</div>
          <div className="text-2xl font-bold text-red-600">${totalExpenses.toLocaleString()}</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Net Profit</div>
          <div className="text-2xl font-bold text-blue-600">${totalProfit.toLocaleString()}</div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Revenue vs Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
            <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            <Bar dataKey="profit" fill="#10b981" name="Profit" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-foreground">{t.date}</td>
                  <td className="py-3 px-4 text-foreground">{t.description}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        t.type === "Income"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {t.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-semibold text-foreground">
                    {t.amount > 0 ? "+" : ""}${Math.abs(t.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
