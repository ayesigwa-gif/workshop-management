"use client";

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function ReportsPage() {
  const revenueData = [
    { month: "January", revenue: 45000, target: 50000 },
    { month: "February", revenue: 52000, target: 50000 },
    { month: "March", revenue: 48000, target: 50000 },
    { month: "April", revenue: 61000, target: 55000 },
    { month: "May", revenue: 55000, target: 55000 },
  ];

  const inventoryData = [
    { name: "In Stock", value: 65, fill: "#10b981" },
    { name: "Low Stock", value: 22, fill: "#f59e0b" },
    { name: "Out of Stock", value: 13, fill: "#ef4444" },
  ];

  const categoryPerformance = [
    { category: "Engines", sales: 25, revenue: 12500 },
    { category: "Transmissions", sales: 18, revenue: 14400 },
    { category: "Electrical", sales: 32, revenue: 3840 },
    { category: "Suspension", sales: 15, revenue: 7500 },
    { category: "Cooling", sales: 22, revenue: 4400 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Revenue (YTD)</div>
          <div className="text-2xl font-bold text-green-600">$261,000</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Units Sold</div>
          <div className="text-2xl font-bold text-blue-600">112</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Active Customers</div>
          <div className="text-2xl font-bold text-purple-600">48</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Avg Order Value</div>
          <div className="text-2xl font-bold text-orange-600">$2,330</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#10b981" name="Actual" strokeWidth={2} />
              <Line type="monotone" dataKey="target" stroke="#999" name="Target" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Inventory Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={inventoryData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}%`} outerRadius={100}>
                {inventoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Sales by Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryPerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="category" stroke="#999" />
            <YAxis yAxisId="left" stroke="#999" />
            <YAxis yAxisId="right" orientation="right" stroke="#999" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="sales" fill="#3b82f6" name="Units Sold" />
            <Bar yAxisId="right" dataKey="revenue" fill="#10b981" name="Revenue ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Top Performing Categories</h2>
        <div className="grid grid-cols-5 gap-4">
          {categoryPerformance.map((cat) => (
            <div key={cat.category} className="p-4 border border-border rounded-lg">
              <div className="text-sm font-semibold text-foreground">{cat.category}</div>
              <div className="text-2xl font-bold text-primary mt-2">{cat.sales}</div>
              <div className="text-xs text-muted-foreground mt-1">Units Sold</div>
              <div className="text-lg font-semibold text-green-600 mt-2">${cat.revenue.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Revenue</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
