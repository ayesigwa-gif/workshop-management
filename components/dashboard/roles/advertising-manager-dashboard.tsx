import {
  Megaphone,
  Eye,
  MousePointerClick,
  TrendingUp,
  Calendar,
  Target,
} from "lucide-react";
import { Profile } from "@/types";
import { StatCard } from "./stat-card";

interface AdvertisingManagerDashboardProps {
  profile: Profile;
}

export function AdvertisingManagerDashboard({ profile }: AdvertisingManagerDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Marketing Overview</h2>
        <p className="text-muted-foreground">
          Manage campaigns, promotions, and advertising metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Campaigns"
          value="5"
          change="2 ending soon"
          trend="up"
          icon={<Megaphone className="h-5 w-5" />}
        />
        <StatCard
          title="Total Impressions"
          value="124.5K"
          change="+23.4%"
          trend="up"
          icon={<Eye className="h-5 w-5" />}
        />
        <StatCard
          title="Click Rate"
          value="3.8%"
          change="+0.5%"
          trend="up"
          icon={<MousePointerClick className="h-5 w-5" />}
        />
        <StatCard
          title="Conversion Rate"
          value="2.4%"
          change="+0.3%"
          trend="up"
          icon={<Target className="h-5 w-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Active Campaigns
          </h3>
          <div className="space-y-4">
            <CampaignItem
              name="Summer Sale Promotion"
              platform="Facebook"
              budget={500}
              spent={320}
              status="active"
            />
            <CampaignItem
              name="Electronics Week"
              platform="Instagram"
              budget={300}
              spent={280}
              status="ending"
            />
            <CampaignItem
              name="Furniture Clearance"
              platform="Google Ads"
              budget={400}
              spent={150}
              status="active"
            />
            <CampaignItem
              name="Newsletter Campaign"
              platform="Email"
              budget={100}
              spent={45}
              status="active"
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Upcoming Promotions
          </h3>
          <div className="space-y-4">
            <PromotionItem
              title="Back to School Sale"
              startDate="Aug 15, 2024"
              discount="20% off"
              category="All Items"
            />
            <PromotionItem
              title="Weekend Flash Sale"
              startDate="Aug 10, 2024"
              discount="30% off"
              category="Electronics"
            />
            <PromotionItem
              title="Member Appreciation"
              startDate="Aug 20, 2024"
              discount="15% off"
              category="Furniture"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Campaign Performance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-border">
                <th className="pb-3 text-sm font-medium text-muted-foreground">Campaign</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Impressions</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Clicks</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">CTR</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Conversions</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">ROI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 text-sm text-foreground">Summer Sale</td>
                <td className="py-3 text-sm text-foreground">45,200</td>
                <td className="py-3 text-sm text-foreground">1,720</td>
                <td className="py-3 text-sm text-foreground">3.8%</td>
                <td className="py-3 text-sm text-foreground">86</td>
                <td className="py-3 text-sm text-green-600">+245%</td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-foreground">Electronics Week</td>
                <td className="py-3 text-sm text-foreground">32,100</td>
                <td className="py-3 text-sm text-foreground">1,284</td>
                <td className="py-3 text-sm text-foreground">4.0%</td>
                <td className="py-3 text-sm text-foreground">64</td>
                <td className="py-3 text-sm text-green-600">+189%</td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-foreground">Furniture Clearance</td>
                <td className="py-3 text-sm text-foreground">28,500</td>
                <td className="py-3 text-sm text-foreground">912</td>
                <td className="py-3 text-sm text-foreground">3.2%</td>
                <td className="py-3 text-sm text-foreground">41</td>
                <td className="py-3 text-sm text-green-600">+156%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CampaignItem({
  name,
  platform,
  budget,
  spent,
  status,
}: {
  name: string;
  platform: string;
  budget: number;
  spent: number;
  status: "active" | "ending" | "paused";
}) {
  const percentage = Math.round((spent / budget) * 100);
  const statusColors = {
    active: "bg-green-100 text-green-800",
    ending: "bg-amber-100 text-amber-800",
    paused: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="p-4 bg-secondary/50 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{platform}</p>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-muted-foreground">
          ${spent} / ${budget}
        </span>
        <span className="text-xs text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${
            percentage > 80 ? "bg-amber-500" : "bg-primary"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function PromotionItem({
  title,
  startDate,
  discount,
  category,
}: {
  title: string;
  startDate: string;
  discount: string;
  category: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Calendar className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">
            {category} - Starts {startDate}
          </p>
        </div>
      </div>
      <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
        {discount}
      </span>
    </div>
  );
}
