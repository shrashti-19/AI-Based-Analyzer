import React, { useState } from "react";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setUploading(true);
    const formData = new FormData(); // to upload a file to the server
    formData.append("file", file);

    axios
      .post("https://api.example.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setMessage("File uploaded successfully!");
        setUploading(false);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setMessage("Error uploading file. Please try again.");
        setUploading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-3">
      <h2 className="text-2xl font-bold mb-4 p-4 ">Document Upload</h2>
      <div className="border-2 border-dashed border-gray-500 rounded-lg p-8 flex flex-col items-center w-80 md:w-96 bg-gray-800">
        <FaCloudUploadAlt className="text-6xl text-gray-400 mb-4" />
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-4"
        />
        <button
          onClick={handleUpload}
          disabled={uploading}
          className={`mt-4 ${uploading ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'} text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transform transition-transform duration-300 hover:scale-105`}
        >
          {uploading ? "Uploading..." : "Upload Document"}
        </button>
        {message && <p className="mt-4 text-gray-300">{message}</p>} //used to show success or error messages
        
      </div>
    </div>
  );
};

export default DocumentUpload;
