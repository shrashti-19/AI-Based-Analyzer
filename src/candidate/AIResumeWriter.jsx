import React, { useState } from "react";
import axios from "axios";

const AIResumeWriter = () => {
  const [inputData, setInputData] = useState({
    name: "",
    skills: "",
    experience: "",
  });
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState("");

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const generateResume = () => {
    setLoading(true);
    axios
      .post("https://api.example.com/ai-resume", inputData)
      .then((response) => {
        setResume(response.data.resume);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error generating resume:", error);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-2xl font-bold mb-4">AI Resume Writer</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <input
          type="text"
          name="name"
          value={inputData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-md"
        />
        <textarea
          name="skills"
          value={inputData.skills}
          onChange={handleChange}
          placeholder="Your skills"
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-md"
        />
        <textarea
          name="experience"
          value={inputData.experience}
          onChange={handleChange}
          placeholder="Your work experience"
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-md"
        />
        <button
          onClick={generateResume}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Resume"}
        </button>
      </div>

      {resume && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-xl font-semibold mb-4">Your Generated Resume</h3>
          <pre className="text-gray-300">{resume}</pre>
        </div>
      )}
    </div>
  );
};

export default AIResumeWriter;
