import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { useTermsConditionsMutation } from "../../../redux/api/authApi";

export const TermsContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(`
    <ul>
      <li>
        1. Acceptance of Terms:
By accessing or using this application, you agree to these Terms and Conditions. If you do not agree, stop using the application immediately.
      </li>
      <li>
2. Use of the Application:
You may use this application solely for testing, demonstration, and evaluation purposes. Any misuse, abuse, or attempt to exploit the system is prohibited.
      </li>
      <li>
3. User Accounts:
You are responsible for maintaining the confidentiality of your account credentials. We are not liable for any unauthorized access resulting from your failure to protect your information.
      </li>
    </ul>
  `);
  const [originalContent, setOriginalContent] = useState(content);

  const [updateTerms, { isLoading }] = useTermsConditionsMutation();

  // Quill toolbar configuration
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      [{ size: ["small", false, "large", "huge"] }],
    ],
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "size",
  ];

  const handleEdit = () => {
    setOriginalContent(content);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setContent(originalContent);
    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      await updateTerms({ content }).unwrap();
      toast.success("Terms & Conditions updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update terms:", error);
      toast.error(
        error?.data?.message || "Failed to update. Please try again."
      );
    }
  };

  return (
    <div className="relative">
      {/* Edit Button - Top Right */}
      {!isEditing && (
        <div className="flex justify-end mb-4">
          <button
            onClick={handleEdit}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Edit
          </button>
        </div>
      )}

      {/* Content Display or Editor */}
      {isEditing ? (
        <div className="space-y-4">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            className="bg-white"
            style={{ minHeight: "300px" }}
          />

          {/* Save and Cancel Buttons */}
          <div className="flex gap-3 justify-end mt-6">
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="bg-[#BBF246] hover:bg-[#a8d93f] text-black px-6 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className="bg-[#FF3D00] hover:bg-[#e63600] text-white px-6 py-2 rounded-md text-sm font-medium disabled:opacity-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div
          className="space-y-6 text-black text-left p-4 font-normal text-sm prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};
