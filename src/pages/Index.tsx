
import { DashboardCard } from "@/components/DashboardCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const performanceData = [
  { month: "Jan", value: 2400 },
  { month: "Feb", value: 1398 },
  { month: "Mar", value: 9800 },
  { month: "Apr", value: 3908 },
  { month: "May", value: 4800 },
  { month: "Jun", value: 3800 },
];

const allocationData = [
  { name: "Stocks", value: 400 },
  { name: "Bonds", value: 300 },
  { name: "Cash", value: 200 },
  { name: "Real Estate", value: 100 },
];

const COLORS = ["#9b87f5", "#63b3ed", "#f6ad55", "#f687b3"];

const Index = () => {
  return (
    <div className="min-h-screen bg-muted p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back to your investment overview
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Total Portfolio Value"
            value="$124,273.00"
            description="+14.2% from last month"
          >
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          </DashboardCard>

          <DashboardCard
            title="Monthly Returns"
            value="$2,431.00"
            description="+2.3% from last month"
          >
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          </DashboardCard>

          <DashboardCard
            title="Total Investments"
            value="73"
            description="4 new positions"
          />

          <DashboardCard
            title="Available Cash"
            value="$12,500.00"
            description="-$4,200 from last month"
          >
            <ArrowDownRight className="h-4 w-4 text-red-500" />
          </DashboardCard>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Portfolio Performance</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Asset Allocation</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {allocationData.map((item, index) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="divide-y">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="py-4 flex items-center justify-between hover:bg-muted/50 rounded-lg transition-colors"
              >
                <div className="space-y-1">
                  <p className="font-medium">Buy AAPL</p>
                  <p className="text-sm text-muted-foreground">
                    March {i + 10}, 2024
                  </p>
                </div>
                <p className="font-medium text-green-500">+$1,234.00</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
