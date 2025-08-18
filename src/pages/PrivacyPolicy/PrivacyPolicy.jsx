import React from "react";
import { Shield, Lock, Mail, User } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-green-50 flex justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="w-8 h-8 text-green-600" />
          <h1 className="text-2xl font-bold text-gray-800">Privacy Policy</h1>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-600 text-base leading-relaxed">
          <p>
            Your privacy is very important to us. This Privacy Policy explains
            how we collect, use, and safeguard your information when you use our
            services.
          </p>

          <section>
            <h2 className="flex items-center space-x-2 text-lg font-semibold text-gray-800 mb-2">
              <User className="w-5 h-5 text-green-500" />
              <span>Information We Collect</span>
            </h2>
            <p>
              We may collect personal details such as your name, email address,
              and any other information you provide when contacting us or using
              our platform.
            </p>
          </section>

          <section>
            <h2 className="flex items-center space-x-2 text-lg font-semibold text-gray-800 mb-2">
              <Lock className="w-5 h-5 text-green-500" />
              <span>How We Use Your Information</span>
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>To provide and improve our services.</li>
              <li>To respond to your inquiries and support requests.</li>
              <li>To send important updates related to our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center space-x-2 text-lg font-semibold text-gray-800 mb-2">
              <Mail className="w-5 h-5 text-green-500" />
              <span>Contact Us</span>
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, feel free
              to contact us at{" "}
              <a
                href="mailto:support@example.com"
                className="text-green-600 underline"
              >
                support@example.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
