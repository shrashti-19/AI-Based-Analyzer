// src/components/History.jsx
import React, { useEffect, useState } from 'react';

const History = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch saved results from backend
    const fetchResults = async () => {
      const response = await fetch('/api/get-saved-results');
      const data = await response.json();
      setResults(data);
    };
    fetchResults();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Saved Results</h1>
      {results.map((result, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded mb-4">
          <h2 className="font-bold">Analysis {index + 1}</h2>
          <p>Score: {result.score}</p>
          <p>Improvements: {result.improvements.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
