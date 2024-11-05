// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">AI-Based Resume Analyzer</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="text-white hover:text-blue-300">Dashboard</Link>
          </li>
          <li>
            <Link to="/history" className="text-white hover:text-blue-300">History</Link>
          </li>
          <li>
            <Link to="/profile" className="text-white hover:text-blue-300">Profile</Link>
          </li>
          <li>
            <Link to="/results" className="text-white hover:text-blue-300">Results</Link>
          </li>
          <li>
            <Link to="/resume-analysis" className="text-white hover:text-blue-300">Resume Analysis</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
