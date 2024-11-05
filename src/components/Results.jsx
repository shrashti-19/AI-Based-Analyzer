// src/components/Results.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const { analysisData } = location.state || {}; 

  if (!analysisData) return <p>No data available.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Analysis Results</h1>
      <p>Overall Score: {analysisData.score}</p>
      <p>Strengths: {analysisData.strengths.join(', ')}</p>
      <p>Areas for Improvement: {analysisData.improvements.join(', ')}</p>
      {/* Add more detailed feedback here */}
    </div>
  );
};

export default Results;
