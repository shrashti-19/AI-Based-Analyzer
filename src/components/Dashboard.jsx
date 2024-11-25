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
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [showCandidateDropdown, setShowCandidateDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center relative">
        <div className="text-2xl font-bold">Resume_Analyzer</div>
        {/*Mobile menu button*/}
        <div className="lg:hidden">
          <button onClick={()=> setShowMobileMenu(!showMobileMenu)}>
            <span className="text-white">☰</span>
          </button>
        </div>
        {/*Desktop menu*/}
        <div className="hidden lg:flex space-x-6">
          {/*Features Dropdown*/}
          <div 
           onMouseEnter={() =>setShowFeaturesDropdown(true)}
           onMouseLeave={() =>setShowFeaturesDropdown(false)}
           className="relative"
          >
            <button className="hover:underline">Features</button>
            {showFeaturesDropdown && (
              <div className="absolute top-13 left-0 bg-gray-800 text-white border border-gray-700 rounded-lg p-4 w-64 shadow-lg z-50">
                <ul>
                  <li className="hover: bg-gray-700 p-2 rounded cursor-pointer" onClick={()=> navigate("/resume-builder")}>
                    Resume Builder
                  </li>
                  <li className="hover: bg-gray-700 p-2 rounded" onClick={()=> navigate("/cover-letter-builder")}>
                    Cover Letter Builder
                  </li>
                  <li className="hover: bg-gray-700 p-2 rounded" onClick={()=> navigate("/career-map")}>
                    Career Map
                  </li>
                  <li className="hover: bg-gray-700 p-2 rounded" onClick={()=> navigate("/resume-checker")}>
                    Resume checker
                  </li>
                  <li className="hover: bg-gray-700 p-2 rounded" onClick={()=> navigate("/ai-resume-builder")}>
                    AI Resume Writer
                  </li>

                </ul>
              </div>
            )}
        </div>
        </div>
        

          {/* Candidate Dropdown */}
          <div 
          onMouseEnter={()=>setShowCandidateDropdown(true)}
          onMouseLeave={()=>setShowCandidateDropdown(false)}
          className="relative"
          >
            <button className="hover:underline">Candidate</button>
            {showCandidateDropdown && (
              <div className="absolute top-13 left-0 bg-gray-800 text-white border border-gray-700 rounded-lg p-4 w-64 shadow-lg z-50">
                <ul>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={()=>navigate("/candidate-profile")}>
                    Profile
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={()=>navigate("/candidate-documents")}>
                    Documents
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={()=> navigate("/candidate-applicationtracker")}>
                    Application Tracker
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={()=> navigate("/candidate-notifications")}>
                    Notifications
                  </li>
                </ul>
                </div>
            )}
          </div>
          {/* Resume Dropdown */}
          <div 
          onMouseEnter={()=> setShowResumeDropdown(true)}
          onMouseLeave={()=>setShowResumeDropdown(false)}
          className="relative"
          >
            <button className="hover:underline">Resume</button>
            {showResumeDropdown && (
              <div className="absolute top-13 left-0 bg-gray-800 text-white border border-gray-700 rounded-lg p-4 w-64 shadow-lg z-50">
                <ul>
                  <li className="hover:bg-gray-700 p-2 rounded"onClick={()=>navigate("/resume/builder")}>
                    Create New Resume
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded"onClick={()=>navigate("/resume-templates")}>
                    Choose Template
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded"onClick={()=>navigate("/resume-checker")}>
                    Resume Checker
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded"onClick={()=>navigate("/ai-resume-builder")}>
                    AI Resume Writer
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded"onClick={()=>navigate("/resume-examples")}>
                    Resume Examples
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded"onClick={()=>navigate("/resume-tips")}>
                    Resume Tips
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Cover Letter Dropdown */}
          <div 
          onMouseEnter={()=> setShowCoverLetterDropdown(true)}
          onMouseLeave={()=>setShowCoverLetterDropdown(false)}
          className="relative"
          >
            <button className="hover:underline">Cover Letter</button>
            {showCoverLetterDropdown && (
              <div className="absolute top-13 left-0 bg-gray-700 text-white border border-gray-700 rounded-lg p-4 w-64 shadow-lg">
                <ul>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={()=> navigate("/cover-letter-builder")}>
                    Create New Cover Letter
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={()=> navigate("/cover-letter-templates")}>
                   Choose templates
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={()=> navigate("/cover-letter-checker")}>
                    Cover Letter Checker
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={()=> navigate("/ai-cover-letter-writer")}>
                    AI Cover Letter Writer
                  </li>
                </ul>
              </div>
            )}
          </div>

        {/*Pricing Buttons*/}
        <div className="relative">
          <button
          onClick={()=>setShowPricingDropdown((prev)=>!prev)}
          className="hover:underline"
          >
            Pricing
          </button>
       
          {showPricingDropdown && (
            <div className="absolute top-12 left-0 bg-gray-800 text-white border border-gray-700 rounded-lg p-4 w-64 shadow-lg z-50">
              <ul>
                <li className="hover:bg-gray-700 p-2 rounded" onClick={()=> navigate("/pricing")}>
                  View Pricing Plans
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Auth Buttons */}
        <div className="space-x-4">
          <button onClick={()=> navigate("/signup")}
          className="border px-4 py-1 rounded bg-white text-gray-800">
            Create My Resume
          </button>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">AI Resume Checker : Get your resume score now.</h1>
          <p className="mt-2 text-lg text-gray-300">
            Get your resume reviewed in an instant. Scan your resume for issues and see how it 
            compares against other resumes in our database.
          </p>
        </div>

        <div className="flex gap-6 items-center justify-center">
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
        {/* Build from Scratch*/}
        <div className="border-2 border-dashed border-gray-500 rounded-lg p-8 flex flex-col items-center w-80 md:w-96 bg-gray-800">
          <FaCloudUploadAlt className="text-6xl text-gray-400 mb-4"/>
          <button
          onClick={()=> navigate("/resume-builder")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Build it from Scratch!
          </button>
          <p className="mt-4 text-gray-400">Start fresh and create a resume easily</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
