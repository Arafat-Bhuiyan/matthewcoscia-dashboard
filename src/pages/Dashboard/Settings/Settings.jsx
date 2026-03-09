import { useState } from "react";
import { TermsContent } from "./Terms";
import { PrivacyContent } from "./Privacy";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="flex">
      <div className="flex-1">
        {/* Content Area */}

        <div className="">
          <div className="bg-white">
            {/* Tab Navigation */}
            <div className="p-6">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("terms")}
                  className={`px-6 py-4 transition-colors relative text-2xl font-normal ${
                    activeTab === "terms"
                      ? "text-[#56BA28] border-b-2 border-[#56BA28]"
                      : "text-black"
                  }`}
                >
                  Terms And Condition
                </button>
                <button
                  onClick={() => setActiveTab("privacy")}
                  className={`px-6 py-4 text-2xl font-normal transition-colors relative ${
                    activeTab === "privacy"
                      ? "text-[#56BA28] border-b-2 border-[#56BA28]"
                      : "text-black"
                  }`}
                >
                  Privacy policy
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-4">
              {activeTab === "terms" ? <TermsContent /> : <PrivacyContent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
