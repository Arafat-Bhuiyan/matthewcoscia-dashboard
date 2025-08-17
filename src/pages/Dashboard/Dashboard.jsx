
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import up from "../../assets/trendup.png";
import down from "../../assets/trenddown.png";

export const Dashboard = () => {
  const [selectedRevenueMonth, setSelectedRevenueMonth] = useState("October");
  const [selectedUserMonth, setSelectedUserMonth] = useState("October");
  const [revenueDropdownOpen, setRevenueDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Sample data for the revenue chart
  const revenueData = [
    { x: "5k", y: 20 },
    { x: "10k", y: 30 },
    { x: "15k", y: 45 },
    { x: "20k", y: 55 },
    { x: "25k", y: 50 },
    { x: "30k", y: 45 },
    { x: "35k", y: 25 },
    { x: "40k", y: 30 },
    { x: "45k", y: 65 },
    { x: "50k", y: 55 },
    { x: "55k", y: 60 },
    { x: "60k", y: 50 },
  ];

  // Sample data for user statistics
  const userData = [
    { name: "Jan", value: 75 },
    { name: "Feb", value: 65 },
    { name: "Mar", value: 68 },
    { name: "Apr", value: 58 },
    { name: "May", value: 65 },
    { name: "Jun", value: 45 },
    { name: "Jul", value: 58 },
    { name: "Aug", value: 68 },
    { name: "Sep", value: 52 },
    { name: "Oct", value: 30 },
    { name: "Nov", value: 48 },
    { name: "Dec", value: 42 },
  ];
  return (
    <div className="flex-1 p-8 space-y-8">
      {/* Cards */}
      <div className="flex items-center gap-6">
        <div className="bg-white shadow-xl p-6 flex flex-col items-start rounded-2xl gap-5">
          <p className="font-semibold text-base text-gray-500">Total User</p>
          <p className="font-bold text-2xl">40,689</p>
          <div className="flex items-center gap-2 font-semibold text-base text-gray-500">
            <img src={up} alt="" />
            <p>
              <span className="text-green-500">8.5%</span> Up from yesterday
            </p>
          </div>
        </div>

        <div className="bg-white shadow-xl p-6 flex flex-col items-start rounded-2xl gap-5">
          <p className="font-semibold text-base text-gray-500">
            Total active user
          </p>
          <p className="font-bold text-2xl">10293</p>
          <div className="flex items-center gap-2 font-semibold text-base text-gray-500">
            <img src={up} alt="" />
            <p>
              <span className="text-green-500">1.3%</span> Up from past week
            </p>
          </div>
        </div>

        <div className="bg-white shadow-xl p-6 flex flex-col items-start rounded-2xl gap-5">
          <p className="font-semibold text-base text-gray-500">Total Revenue</p>
          <p className="font-bold text-2xl">$89,000</p>
          <div className="flex items-center gap-2 font-semibold text-base text-gray-500">
            <img src={down} alt="" />
            <p>
              <span className="text-red-500">4.3%</span> Down from yesterday
            </p>
          </div>
        </div>
      </div>

      {/* Total Revenue Section */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Total Revenue</h2>
          <div className="relative">
            <div
              className="flex items-center space-x-2 text-gray-500 cursor-pointer bg-gray-50 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setRevenueDropdownOpen(!revenueDropdownOpen)}
            >
              <span className="text-sm">{selectedRevenueMonth}</span>
              <ChevronDown size={16} />
            </div>
            {revenueDropdownOpen && (
              <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {months.map((month) => (
                  <div
                    key={month}
                    className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedRevenueMonth(month);
                      setRevenueDropdownOpen(false);
                    }}
                  >
                    {month}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="h-80 relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <XAxis
                dataKey="x"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#BBF246" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#BBF246" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Line
                type="monotone"
                dataKey="y"
                stroke="#BBF246"
                strokeWidth={2}
                dot={{ fill: "#BBF246", strokeWidth: 0, r: 3 }}
                activeDot={{ r: 4, fill: "#BBF246" }}
              />
            </LineChart>
          </ResponsiveContainer>

          {/* Revenue tooltip */}
          <div className="absolute top-8 left-1/4 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
            64.3664
          </div>
        </div>
      </div>

      {/* Total User Section */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Total User</h2>
          <div className="relative">
            <div
              className="flex items-center space-x-2 text-gray-500 cursor-pointer bg-gray-50 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            >
              <span className="text-sm">{selectedUserMonth}</span>
              <ChevronDown size={16} />
            </div>
            {userDropdownOpen && (
              <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {months.map((month) => (
                  <div
                    key={month}
                    className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedUserMonth(month);
                      setUserDropdownOpen(false);
                    }}
                  >
                    {month}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userData} barCategoryGap="20%">
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <Bar dataKey="value" fill="#BBF246" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
