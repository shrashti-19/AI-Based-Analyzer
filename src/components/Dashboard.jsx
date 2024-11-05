import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ()=>{
  const navigate = useNavigate();
  return(
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome Back!</h1>
      <button 
      onClick={()=> navigate('/analyze')}
      className="bg-blue-500 text-white p-4 rounded mt-4">
        Start New Analysis
      </button>
      <button
      onClick={()=>navigate('/saved-results')}
      className="bg-gray-500 text-white p-4 rounded mt-4"
      >
        View Saved Results

      </button>
    </div>
  )
}

export default Dashboard;