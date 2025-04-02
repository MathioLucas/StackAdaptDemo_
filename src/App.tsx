import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

// Define types for our data structures
interface ChannelData {
  name: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
}

interface BrandLiftData {
  metric: string;
  control: number;
  exposed: number;
  lift: number;
}

interface WeeklyData {
  week: string;
  impressions: number;
  clicks: number;
  conversions: number;
}

interface ColorMapping {
  [key: string]: string;
  ctr: string;
  impressions: string;
  clicks: string;
  conversions: string;
  control: string;
  exposed: string;
  lift: string;
}

// Mock data with type annotations
const channelData: ChannelData[] = [
  {
    name: "Native",
    impressions: 1250000,
    clicks: 37500,
    ctr: 3.0,
    conversions: 1875,
  },
  {
    name: "Display",
    impressions: 1850000,
    clicks: 27750,
    ctr: 1.5,
    conversions: 1110,
  },
  {
    name: "Video",
    impressions: 950000,
    clicks: 33250,
    ctr: 3.5,
    conversions: 1830,
  },
  {
    name: "CTV",
    impressions: 750000,
    clicks: 28500,
    ctr: 3.8,
    conversions: 1710,
  },
  {
    name: "Audio",
    impressions: 550000,
    clicks: 16500,
    ctr: 3.0,
    conversions: 990,
  },
  {
    name: "In-Game",
    impressions: 680000,
    clicks: 23800,
    ctr: 3.5,
    conversions: 1428,
  },
  {
    name: "DOOH",
    impressions: 450000,
    clicks: 13500,
    ctr: 3.0,
    conversions: 675,
  },
];

const brandLiftData: BrandLiftData[] = [
  { metric: "Brand Awareness", control: 32, exposed: 58, lift: 81 },
  { metric: "Brand Consideration", control: 24, exposed: 41, lift: 71 },
  { metric: "Purchase Intent", control: 12, exposed: 29, lift: 142 },
];

const weeklyData: WeeklyData[] = [
  { week: "Week 1", impressions: 850000, clicks: 25500, conversions: 1275 },
  { week: "Week 2", impressions: 920000, clicks: 29440, conversions: 1472 },
  { week: "Week 3", impressions: 1050000, clicks: 35700, conversions: 1785 },
  { week: "Week 4", impressions: 1120000, clicks: 39200, conversions: 1960 },
  { week: "Week 5", impressions: 1180000, clicks: 41300, conversions: 2065 },
  { week: "Week 6", impressions: 1250000, clicks: 45000, conversions: 2250 },
];

const colorMapping: ColorMapping = {
  ctr: "#ffc658",
  impressions: "#8884d8",
  clicks: "#82ca9d",
  conversions: "#ff7300",
  control: "#8884d8",
  exposed: "#82ca9d",
  lift: "#ff7300",
};

type ActiveTab = "overview" | "channels" | "studies";

const StackAdaptDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");

  const formatNumber = (number: number): string => {
    return new Intl.NumberFormat().format(number);
  };

  const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 shadow-md rounded-md">
          <p className="font-bold text-gray-700">{label}</p>
          {payload.map((entry, index) => (
            <p
              key={`item-${index}`}
              style={{ color: entry.color }}
              className="text-sm"
            >
              {entry.name}:{" "}
              {entry.name === "CTR" || entry.name === "Lift"
                ? `${entry.value}%`
                : formatNumber(entry.value as number)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with StackAdapt branding */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white font-bold px-3 py-2 rounded-md mr-3">
              SA
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              StackAdapt Ad Performance Dashboard
            </h1>
          </div>
          <div className="bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
            Summer Sale Promotion
          </div>
        </div>
      </div>

      {/* Performance metrics */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">Impressions</p>
            <p className="text-2xl font-bold">{formatNumber(6480000)}</p>
            <p className="text-green-500 text-sm">↑ 12.4% vs last month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">Clicks</p>
            <p className="text-2xl font-bold">{formatNumber(210600)}</p>
            <p className="text-green-500 text-sm">↑ 8.7% vs last month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">CTR</p>
            <p className="text-2xl font-bold">3.25%</p>
            <p className="text-red-500 text-sm">↓ 0.2% vs last month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">Conversions</p>
            <p className="text-2xl font-bold">{formatNumber(10530)}</p>
            <p className="text-green-500 text-sm">↑ 15.2% vs last month</p>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "overview"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("channels")}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "channels"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Channels
              </button>
              <button
                onClick={() => setActiveTab("studies")}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "studies"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Measurement Studies
              </button>
            </nav>
          </div>

          {/* Tab content */}
          <div className="p-6">
            {activeTab === "overview" && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Campaign Performance Over Time
                </h2>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weeklyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="impressions"
                        name="Impressions"
                        stroke={colorMapping.impressions}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="clicks"
                        name="Clicks"
                        stroke={colorMapping.clicks}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="conversions"
                        name="Conversions"
                        stroke={colorMapping.conversions}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === "channels" && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Multi-Channel Performance
                </h2>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={channelData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Bar
                        dataKey="impressions"
                        name="Impressions"
                        fill={colorMapping.impressions}
                      />
                      <Bar
                        dataKey="clicks"
                        name="Clicks"
                        fill={colorMapping.clicks}
                      />
                      <Bar dataKey="ctr" name="CTR" fill={colorMapping.ctr} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === "studies" && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Brand Lift Study Results
                </h2>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={brandLiftData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="metric" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Bar
                        dataKey="control"
                        name="Control Group (%)"
                        fill={colorMapping.control}
                      />
                      <Bar
                        dataKey="exposed"
                        name="Exposed Group (%)"
                        fill={colorMapping.exposed}
                      />
                      <Bar
                        dataKey="lift"
                        name="Lift"
                        fill={colorMapping.lift}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800 mb-2">
                    Key Insights
                  </h3>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>
                      • Video ads drove the highest brand awareness lift at 81%
                    </li>
                    <li>
                      • Purchase intent showed the most significant improvement
                      (142%)
                    </li>
                    <li>
                      • Users aged 25-34 showed 2.1x more positive brand
                      sentiment after exposure
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-6">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <p className="text-sm text-gray-500 text-center">
            Designed for StackAdapt by Mathio Masood-Luca
          </p>
        </div>
      </div>
    </div>
  );
};

export default StackAdaptDashboard;
