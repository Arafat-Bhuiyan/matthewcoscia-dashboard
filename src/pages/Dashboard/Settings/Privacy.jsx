import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { usePrivacyPolicyMutation } from "../../../redux/api/authApi";

export const PrivacyContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(`
    <ul>
      <li>
        1. We collect minimal information required to operate this application.
      </li>
      <li>
        2. Your data is used only for demonstration and system functionality.
      </li>
      <li>
        3. We do not sell or share your data with third parties.
      </li>
      <li>
        4. This policy may change at any time without notice.
      </li>
    </ul>
  `);
  const [originalContent, setOriginalContent] = useState(content);

  const [updatePrivacy, { isLoading }] = usePrivacyPolicyMutation();

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
      await updatePrivacy({ content }).unwrap();
      toast.success("Privacy Policy updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update privacy policy:", error);
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
