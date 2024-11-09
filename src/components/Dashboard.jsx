import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);
  const [showCoverLetterDropdown, setShowCoverLetterDropdown] = useState(false);
  const [showPricingDropdown, setShowPricingDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCandidateDropdown, setShowCandidateDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Resume_Analyzer</div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <span className="text-white">☰</span>
          </button>
        </div>
        <div className="space-x-6 flex">
          {/* Features Dropdown */}
          <div
            onMouseEnter={() => setShowFeaturesDropdown(true)}
            onMouseLeave={() => setShowFeaturesDropdown(false)}
            className="relative"
          >
            <button className="hover:underline">Features</button>
            {showFeaturesDropdown && (
              <div className="absolute top-12 left-0 bg-gray-800 text-white border border-gray-700 rounded-lg p-4 w-64 shadow-lg">
                <ul>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/resume-builder")}>
                    Resume Builder
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/cover-letter-builder")}>
                    Cover Letter Builder
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/website-builder")}>
                    Website Builder
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/career-map")}>
                    Career Map
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/resume-checker")}>
                    Resume Checker
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/ai-resume-writer")}>
                    AI Resume Writer
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/ai-cover-letter-writer")}>
                    AI Cover Letter Writer
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/ai-resignation-letter")}>
                    AI Resignation Letter Generator
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Candidate Dropdown */}
          <div
            onMouseEnter={() => setShowCandidateDropdown(true)}
            onMouseLeave={() => setShowCandidateDropdown(false)}
            className="relative"
          >
            <button className="hover:underline">Candidate</button>
            {showCandidateDropdown && (
              <div className="absolute top-12 left-0 bg-gray-800 text-white border border-gray-700 rounded-lg p-4 w-64 shadow-lg">
                <ul>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/candidate-profile")}>
                    Profile
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/candidate-documents")}>
                    Documents
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/candidate-applications")}>
                    Job Applications
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/candidate-notifications")}>
                    Notifications
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/candidate-careerMap")}>
                  Career Map
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/candidate-AIResumeWriter")}
                  >AIResumeWriter

                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Resume Dropdown */}
          <div
            onMouseEnter={() => setShowResumeDropdown(true)}
            onMouseLeave={() => setShowResumeDropdown(false)}
            className="relative"
          >
            <button className="hover:underline">Resume</button>
            {showResumeDropdown && (
              <div className="absolute top-12 left-0 bg-gray-800 text-white border border-gray-700 rounded-lg p-4 w-64 shadow-lg">
                <ul>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/resume/builder")}>
                    Create New Resume
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/resume-templates")}>
                    Choose Template
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/resume-checker")}>
                    Resume Checker
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/ai-resume-builder")}>
                    AI Resume Writer
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/resume-examples")}>
                    Resume Examples
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/resume-tips")}>
                    Resume Tips
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Cover Letter Dropdown */}
          <div
            onMouseEnter={() => setShowCoverLetterDropdown(true)}
            onMouseLeave={() => setShowCoverLetterDropdown(false)}
            className="relative"
          >
            <button className="hover:underline">Cover Letter</button>
            {showCoverLetterDropdown && (
              <div className="absolute top-12 left-0 bg-gray-800 text-white border border-gray-700 rounded-lg p-4 w-64 shadow-lg">
                <ul>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/cover-letter-builder")}>
                    Create New Cover Letter
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/cover-letter-templates")}>
                    Choose Template
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/cover-letter-checker")}>
                    Cover Letter Checker
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/ai-cover-letter-writer")}>
                    AI Cover Letter Writer
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Pricing Dropdown */}
          <div
            onMouseEnter={() => setShowPricingDropdown(true)}
            onMouseLeave={() => setShowPricingDropdown(false)}
            className="relative"
          >
            <button className="hover:underline">Pricing</button>
            {showPricingDropdown && (
              <div className="absolute top-12 left-0 bg-gray-800 text-white border border-gray-700 rounded-lg p-4 w-64 shadow-lg">
                <ul>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => navigate("/pricing")}>
                    View Pricing Plans
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <button
            onClick={() => navigate("/signup")}
            className="border px-4 py-1 rounded bg-white text-gray-800"
          >
            Create My Resume
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">AI Resume Checker: Get your resume score now.</h1>
          <p className="mt-2 text-lg text-gray-300">
            Get your resume reviewed in an instant. Scan your resume for issues and see how it
            compares against other resumes in our database.
          </p>
        </div>

        {/* Upload Section */}
        <div className="border-2 border-dashed border-gray-500 rounded-lg p-8 flex flex-col items-center w-80 md:w-96 bg-gray-800">
          <FaCloudUploadAlt className="text-6xl text-gray-400 mb-4" />
          <button
            onClick={() => navigate("/upload")}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Upload your resume
          </button>
          <p className="mt-4 text-gray-400">Supported formats: PDF, DOCX, TXT</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
