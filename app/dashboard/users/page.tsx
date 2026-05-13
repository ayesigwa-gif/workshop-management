"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search } from "lucide-react";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john@workshop.com",
      role: "Admin",
      status: "Active",
      joinedDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@workshop.com",
      role: "Operation Manager",
      status: "Active",
      joinedDate: "2024-02-20",
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike@workshop.com",
      role: "Finance Manager",
      status: "Active",
      joinedDate: "2024-03-10",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Users Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
          <Plus className="h-5 w-5" />
          Add User
        </button>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-6 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg border border-border">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Role</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Joined</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 text-foreground">{user.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">{user.role}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">{user.status}</span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{user.joinedDate}</td>
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
