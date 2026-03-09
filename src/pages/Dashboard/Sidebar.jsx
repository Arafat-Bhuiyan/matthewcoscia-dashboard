import React from "react";
import { LayoutDashboard, User, Settings, LogOut } from "lucide-react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";

export const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { key: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { key: "user", icon: User, label: "User" },
    { key: "settings", icon: Settings, label: "Settings" },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="w-48 bg-gray-800 text-white flex flex-col h-screen relative">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center space-x-2">
        <img src={logo} alt="logo" />
      </div>

      {/* Navigation */}
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.key;

            return (
              <div
                key={item.key}
                onClick={() => setActivePage(item.key)}
                className={`px-3 py-2 flex items-center space-x-3 cursor-pointer rounded-lg relative ${
                  isActive
                    ? "bg-[#BBF246] text-black"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {/* Active indicator (left white bar) */}
                {isActive && (
                  <span className="absolute left-[0.45px] top-1 h-7 w-1.5 bg-white rounded"></span>
                )}

                <Icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-4 left-4 right-4">
        <div
          onClick={handleLogout}
          className="text-gray-300 hover:text-white px-3 py-2 rounded-lg flex items-center space-x-3 cursor-pointer"
        >
          <LogOut size={18} />
          <span className="text-sm">Logout</span>
        </div>
      </div>
    </div>
  );
};
