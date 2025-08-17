import React, { useState } from "react";
import { Search, Eye, Edit, Trash2, X } from "lucide-react";

const User = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null); // row click করলে user store হবে

  const users = [
    {
      id: 1,
      fullName: "Alyssa Kelly",
      status: "Active",
      email: "aalissa@gmail.com",
      dateOfBirth: "02/08/1975",
    },
    {
      id: 2,
      fullName: "Jazmin Mosur",
      status: "Active",
      email: "jazmin@gmail.com",
      dateOfBirth: "02/08/1983",
    },
    {
      id: 3,
      fullName: "Ace Kelly",
      status: "Blocked",
      email: "ace@yahoo.com",
      dateOfBirth: "02/08/1985",
    },
    {
      id: 4,
      fullName: "Jessica Schmidt",
      status: "Active",
      email: "jessicaschmidt@outlook.com",
      dateOfBirth: "02/08/1982",
    },
    {
      id: 5,
      fullName: "Clayton Charles",
      status: "Active",
      email: "clay@test.com",
      dateOfBirth: "02/14/1971",
    },
    {
      id: 6,
      fullName: "Prince Otter",
      status: "Active",
      email: "princeotter@gmail.com",
      dateOfBirth: "07/04/1982",
    },
    {
      id: 7,
      fullName: "Reece Dixon",
      status: "Active",
      email: "reece@yahoo.com",
      dateOfBirth: "02/08/1980",
    },
    {
      id: 8,
      fullName: "Anastasia Michaels",
      status: "Active",
      email: "anastasia.garh2@hotmail.com",
      dateOfBirth: "02/10/1988",
    },
    {
      id: 9,
      fullName: "Mattie Boyle",
      status: "Blocked",
      email: "MattieB@gmail.com",
      dateOfBirth: "02/08/1974",
    },
    {
      id: 10,
      fullName: "Kaden Thomas",
      status: "Blocked",
      email: "kadenthomas@gmail.com",
      dateOfBirth: "11/26/1954",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Blocked":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Blocked":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-6xl mx-auto">
      {/* Search Bar */}
      <div className="mb-6 flex justify-end">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-xs">
                #
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-xs">
                Full Name
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-xs">
                Status
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-xs">
                E-Mail
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-xs">
                Date of Birth
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-xs"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                  index % 2 === 1 ? "bg-gray-50" : "bg-white"
                }`}
                onClick={() => setSelectedUser(user)} // row click করলে modal এ দেখাবে
              >
                <td className="py-4 px-4 text-sm text-gray-700">{user.id}</td>
                <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                  {user.fullName}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      user.status
                    )}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full mr-2 ${getStatusDot(
                        user.status
                      )}`}
                    ></span>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-blue-600">
                  {user.email}
                </td>
                <td className="py-4 px-4 text-sm text-gray-700">
                  {user.dateOfBirth}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <Eye
                      size={16}
                      className="text-gray-500 hover:text-gray-700"
                    />
                    <Edit
                      size={16}
                      className="text-gray-500 hover:text-gray-700"
                    />
                    <Trash2
                      size={16}
                      className="text-gray-500 hover:text-red-600"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
            {/* Close button */}
            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold">
                {selectedUser.fullName[0]}
              </div>
              <div>
                <h2 className="text-lg font-semibold">
                  {selectedUser.fullName}
                </h2>
                <p className="text-sm text-gray-600">
                  DOB: {selectedUser.dateOfBirth}
                </p>
                <p className="text-sm text-gray-600">{selectedUser.email}</p>
              </div>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
