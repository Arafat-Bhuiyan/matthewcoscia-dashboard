import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AccountDeletion() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    console.log("Account Deletion Request Email:", email);
    toast.success("Your deletion request has been submitted.");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          Account Deletion Request
        </h1>
        <p className="text-gray-600 mb-6">
          Enter your registered email address below to request account deletion.
          Our support team will process your request.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-2 px-4 rounded-lg font-medium transition"
          >
            Submit Request
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-6 text-center">
          By submitting, you confirm that you want to permanently delete your
          account.
        </p>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" />
    </div>
  );
}
