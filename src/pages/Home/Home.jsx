import { useState } from "react";
import { Bell } from "lucide-react";
import { Sidebar } from "../Dashboard/Sidebar";
import { Dashboard } from "../Dashboard/Dashboard";
import User from "../Dashboard/User";
import { Settings } from "../Dashboard/Settings";

const Home = () => {
  const [activePage, setActivePage] = useState("dashboard"); // default dashboard

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        <div className="shadow-sm px-6 py-4 flex justify-end">
          <Bell size={20} className="text-black cursor-pointer" />
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {activePage === "dashboard" && <Dashboard />}
          {activePage === "user" && <User />}
          {activePage === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default Home;
