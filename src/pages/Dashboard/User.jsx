import { useState, useEffect } from "react";
import { Search, Eye, Edit, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import {
  useUsersListQuery,
  useDeleteUserMutation,
} from "../../redux/api/authApi";
import ViewDetails from "./ViewDetails";
import EditDetails from "./EditDetails";

const User = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [users, setUsers] = useState([]);

  const { data: usersData } = useUsersListQuery();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  useEffect(() => {
    if (usersData) {
      const formattedData = usersData.map((user) => ({
        id: user.id,
        fullName: user.name,
        email: user.email,
        status: user.is_active ? "Active" : "Blocked",
        dateOfBirth: new Date(user.date_joined).toLocaleDateString(),
        phone: user.phone,
      }));
      setUsers(formattedData);
    }
  }, [usersData]);

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

  const handleDelete = (id) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p className="text-sm font-medium text-gray-800">
            Are you sure you want to delete?
          </p>
          <div className="flex gap-2 justify-end mt-3">
            <button
              onClick={async () => {
                try {
                  await deleteUser(id).unwrap();
                  toast.success("User deleted successfully!");
                  closeToast();
                } catch (error) {
                  console.error("Failed to delete user:", error);
                  toast.error(
                    error?.data?.message ||
                      "Failed to delete user. Please try again."
                  );
                  closeToast();
                }
              }}
              className="bg-red-500 text-white px-3 py-1 rounded text-xs disabled:opacity-50"
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Confirm"}
            </button>
            <button
              onClick={closeToast}
              className="bg-gray-300 text-black px-3 py-1 rounded text-xs"
              disabled={isDeleting}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
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
                Date of Join
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-xs"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b border-gray-100 hover:bg-gray-50 ${
                  index % 2 === 1 ? "bg-gray-50" : "bg-white"
                }`}
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
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                      onClick={() => setSelectedUser(user)}
                    />
                    <Edit
                      size={16}
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                      onClick={() => setEditUser(user)}
                    />
                    <Trash2
                      size={16}
                      className="text-gray-500 hover:text-red-600 cursor-pointer"
                      onClick={() => handleDelete(user.id)}
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
        <ViewDetails
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
      {editUser && (
        <EditDetails user={editUser} onClose={() => setEditUser(null)} />
      )}
    </div>
  );
};

export default User;
