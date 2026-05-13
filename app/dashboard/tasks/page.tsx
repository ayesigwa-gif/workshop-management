"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search, CheckCircle, AlertCircle, Clock } from "lucide-react";

export default function TasksPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const tasks = [
    {
      id: 1,
      title: "Inspect Engine Block #1234",
      assignee: "John Smith",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-05-12",
    },
    {
      id: 2,
      title: "Process Transmission Assembly",
      assignee: "Sarah Johnson",
      priority: "Medium",
      status: "Pending",
      dueDate: "2024-05-15",
    },
    {
      id: 3,
      title: "Package Alternator Units",
      assignee: "Mike Chen",
      priority: "Low",
      status: "Completed",
      dueDate: "2024-05-10",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "In Progress":
        return <Clock className="h-5 w-5 text-blue-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Task Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
          <Plus className="h-5 w-5" />
          New Task
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Tasks</div>
          <div className="text-2xl font-bold text-foreground">{tasks.length}</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">In Progress</div>
          <div className="text-2xl font-bold text-blue-600">
            {tasks.filter((t) => t.status === "In Progress").length}
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Completed</div>
          <div className="text-2xl font-bold text-green-600">
            {tasks.filter((t) => t.status === "Completed").length}
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Pending</div>
          <div className="text-2xl font-bold text-yellow-600">
            {tasks.filter((t) => t.status === "Pending").length}
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-6 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg border border-border">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
            >
              {getStatusIcon(task.status)}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">{task.title}</h3>
                <p className="text-sm text-muted-foreground">Assigned to: {task.assignee}</p>
              </div>
              <span
                className={`px-2 py-1 rounded text-sm font-medium whitespace-nowrap ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-800"
                    : task.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {task.priority}
              </span>
              <span className={`px-2 py-1 rounded text-sm font-medium whitespace-nowrap ${getStatusColor(task.status)}`}>
                {task.status}
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{task.dueDate}</span>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-secondary rounded transition-colors">
                  <Edit2 className="h-4 w-4 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-secondary rounded transition-colors">
                  <Trash2 className="h-4 w-4 text-destructive" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
