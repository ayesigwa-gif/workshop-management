"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search, AlertCircle } from "lucide-react";

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    {
      id: 1,
      name: "Engine Block",
      sku: "ENG-001",
      category: "Engines",
      quantity: 12,
      price: 450.00,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Transmission Assembly",
      sku: "TRN-001",
      category: "Transmissions",
      quantity: 5,
      price: 800.00,
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Alternator",
      sku: "ALT-001",
      category: "Electrical",
      quantity: 2,
      price: 120.00,
      status: "Critical",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
          <Plus className="h-5 w-5" />
          Add Item
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Items</div>
          <div className="text-2xl font-bold text-foreground">2,145</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Low Stock</div>
          <div className="text-2xl font-bold text-yellow-600">23</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Out of Stock</div>
          <div className="text-2xl font-bold text-red-600">5</div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-6 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg border border-border">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Item</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">SKU</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Quantity</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Price</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 text-foreground">{item.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{item.sku}</td>
                  <td className="py-3 px-4 text-muted-foreground">{item.category}</td>
                  <td className="py-3 px-4 text-foreground font-medium">{item.quantity}</td>
                  <td className="py-3 px-4 text-foreground">${item.price.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        item.status === "In Stock"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-secondary rounded transition-colors">
                        <Edit2 className="h-4 w-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-secondary rounded transition-colors">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </button>
                    </div>
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
