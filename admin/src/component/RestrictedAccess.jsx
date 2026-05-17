import { UploadCloudIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
export function Restricted() {
    const navigate = useNavigate()
  return (
    <div className="px-6 py-6">

      {/* HEADER */}
      <div>
        <h1 className="font-bold text-xl">
          SYSTEM-WIDE UPLOAD & MANAGEMENT
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          RESTRICTED ACCESS: ONLY ADMINISTRATORS CAN UPLOAD DOCUMENTS
        </p>
      </div>

      {/* UPLOAD BOX */}
      <div className="bg-gray-50 border-2 border-dashed border-blue-500 mt-6 p-10 rounded flex flex-col items-center justify-center text-center hover:bg-gray-100 transition">

        <UploadCloudIcon size={50} className="text-blue-600 mb-4" />

        <h2 className="font-semibold text-lg text-gray-800">
          Create New Record
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Upload PDF documents to your library
        </p>

        <button 
                className="mt-4 bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800"
                onClick={() => navigate("/upload")}>
          Upload New Document
        </button>
      </div>
    </div>
  );
}