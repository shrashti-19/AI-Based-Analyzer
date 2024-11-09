import React, { useState, useEffect } from "react";
import axios from "axios";

const JobSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`https://api.example.com/jobs/search?query=${searchQuery}`)
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error searching jobs:", error);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Job Search</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search jobs by title, company, or location"
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Search Jobs
        </button>
      </div>
      <div className="space-y-4">
        {loading ? (
          <div>Loading search results...</div>
        ) : (
          jobs.map((job, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-400">{job.company}</p>
              <p className="mt-2">{job.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobSearch;
