import React from "react";
import { Calendar, MailPlus, Phone } from "lucide-react";

const ViewDetails = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <div className="flex flex-col items-center text-center space-y-4 w-full">
          {/* Upper Part */}
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold">
            {user.fullName[0]}
          </div>
          {/* Middle Part */}
          <div className="border rounded-2xl p-3 w-full">
            <div>
              <h2 className="text-xs text-start font-medium my-2">
                Name: {user.fullName}
              </h2>
              <div className="border-b mt-2"></div>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-medium flex gap-2 items-center my-2">
                <Calendar size={16} /> {user.dateOfBirth}
              </p>
              <div className="border-b mt-2"></div>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-medium flex gap-2 items-center my-2">
                <MailPlus size={16} /> {user.email}
              </p>
              <div className="border-b mt-2"></div>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-medium flex gap-2 items-center my-2">
                <Phone size={16} /> {user.email}
              </p>
              <div className="border-b mt-2"></div>
            </div>
            
          </div>
          {/* Cancel */}
          <button className="px-7 py-3 rounded-md bg-[#FF3D00] text-white font-normal text-sm" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;