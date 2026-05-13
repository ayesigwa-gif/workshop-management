"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search, TrendingUp } from "lucide-react";

export default function SalesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const sales = [
    {
      id: 1,
      date: "2024-05-10",
      item: "Engine Block",
      quantity: 2,
      unitPrice: 450.00,
      total: 900.00,
      customer: "ABC Motors",
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-05-09",
      item: "Transmission Assembly",
      quantity: 1,
      unitPrice: 800.00,
      total: 800.00,
      customer: "XYZ Auto",
      status: "Completed",
    },
    {
      id: 3,
      date: "2024-05-08",
      item: "Alternator",
      quantity: 4,
      unitPrice: 120.00,
      total: 480.00,
      customer: "DEF Repair",
      status: "Pending",
    },
  ];

  const totalRevenue = sales.reduce((sum, sale) => sum + sale.total, 0);
  const completedSales = sales.filter((s) => s.status === "Completed").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Sales Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
          <Plus className="h-5 w-5" />
          New Sale
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Revenue</div>
          <div className="text-2xl font-bold text-foreground">${totalRevenue.toFixed(2)}</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Completed Sales</div>
          <div className="text-2xl font-bold text-green-600">{completedSales}</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Pending Orders</div>
          <div className="text-2xl font-bold text-yellow-600">{sales.filter((s) => s.status === "Pending").length}</div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-6 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg border border-border">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search sales..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Item</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Qty</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Unit Price</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Total</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr key={sale.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 text-foreground text-sm">{sale.date}</td>
                  <td className="py-3 px-4 text-foreground">{sale.item}</td>
                  <td className="py-3 px-4 text-muted-foreground">{sale.quantity}</td>
                  <td className="py-3 px-4 text-foreground">${sale.unitPrice.toFixed(2)}</td>
                  <td className="py-3 px-4 text-foreground font-semibold">${sale.total.toFixed(2)}</td>
                  <td className="py-3 px-4 text-muted-foreground">{sale.customer}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        sale.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {sale.status}
                    </span>
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
