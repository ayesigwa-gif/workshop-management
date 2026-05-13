"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function MarketingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const campaignData = [
    { week: "Week 1", impressions: 12500, clicks: 850, conversions: 125 },
    { week: "Week 2", impressions: 15000, clicks: 1050, conversions: 165 },
    { week: "Week 3", impressions: 14200, clicks: 920, conversions: 145 },
    { week: "Week 4", impressions: 18500, clicks: 1350, conversions: 210 },
  ];

  const campaigns = [
    {
      id: 1,
      name: "Spring Parts Promo",
      channel: "Facebook",
      status: "Active",
      budget: 2500,
      spent: 1850,
      impressions: 28500,
      clicks: 1920,
    },
    {
      id: 2,
      name: "Google Ads - Engine Parts",
      channel: "Google",
      status: "Active",
      budget: 3000,
      spent: 2100,
      impressions: 31500,
      clicks: 2200,
    },
    {
      id: 3,
      name: "Instagram - New Stock",
      channel: "Instagram",
      status: "Paused",
      budget: 1500,
      spent: 800,
      impressions: 12000,
      clicks: 650,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Marketing & Advertising</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
          <Plus className="h-5 w-5" />
          New Campaign
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Impressions</div>
          <div className="text-2xl font-bold text-foreground">87.5K</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Clicks</div>
          <div className="text-2xl font-bold text-blue-600">5.7K</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Conversions</div>
          <div className="text-2xl font-bold text-green-600">645</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Conversion Rate</div>
          <div className="text-2xl font-bold text-purple-600">11.3%</div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Campaign Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={campaignData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="week" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="impressions" stroke="#3b82f6" name="Impressions" />
            <Line type="monotone" dataKey="clicks" stroke="#10b981" name="Clicks" />
            <Line type="monotone" dataKey="conversions" stroke="#f59e0b" name="Conversions" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-6 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg border border-border">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Campaign</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Channel</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Budget</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Spent</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Impressions</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Clicks</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 text-foreground font-medium">{campaign.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{campaign.channel}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        campaign.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-foreground">${campaign.budget.toFixed(2)}</td>
                  <td className="py-3 px-4 text-foreground">${campaign.spent.toFixed(2)}</td>
                  <td className="py-3 px-4 text-muted-foreground">{campaign.impressions.toLocaleString()}</td>
                  <td className="py-3 px-4 text-muted-foreground">{campaign.clicks.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
