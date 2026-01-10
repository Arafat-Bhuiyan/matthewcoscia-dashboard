import React, { useState } from "react";
import { Calendar, MailPlus, Phone } from "lucide-react";

const EditDetails = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    dateOfBirth: user?.dateOfBirth || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Updated Data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <div className="flex flex-col items-center text-center space-y-4 w-full">
          {/* Upper Part */}
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold">
            {formData.fullName?.[0]}
          </div>
          {/* Middle Part */}
          <div className="border rounded-2xl p-3 w-full">
            <div>
              <div className="flex items-center gap-2 my-2">
                <span className="text-xs font-medium whitespace-nowrap">Name:</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="text-xs font-medium outline-none w-full bg-transparent"
                />
              </div>
              <div className="border-b mt-2"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 my-2">
                <Calendar size={16} className="text-gray-600" />
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="text-xs text-gray-600 font-medium outline-none w-full bg-transparent"
                />
              </div>
              <div className="border-b mt-2"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 my-2">
                <MailPlus size={16} className="text-gray-600" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-xs text-gray-600 font-medium outline-none w-full bg-transparent"
                />
              </div>
              <div className="border-b mt-2"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 my-2">
                <Phone size={16} className="text-gray-600" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="text-xs text-gray-600 font-medium outline-none w-full bg-transparent"
                />
              </div>
              <div className="border-b mt-2"></div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-4">
            <button
              className="px-7 py-3 rounded-md bg-[#BBF246] text-black font-normal text-sm"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-7 py-3 rounded-md bg-[#FF3D00] text-white font-normal text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDetails;