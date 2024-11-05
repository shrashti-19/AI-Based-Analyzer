import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumeAnalyzer = ()=>{
  const[file,setFile] = useState(null);
  const [isLoading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileUpload = (e)=>setFile(e.target.files[0]);

  const handleAnalyze = async()=>{
    setLoading(true);
    const formData = new FormData();
    formData.append('file',file);

    try{
      const response = await fetch('/api/analyze/resume',{
        method : 'POST',
        body : formData,
      });
      const data = await response.json();
      navigate('/results',{state : {analysisData : data}});
    }catch(error){
      console.error("Analysis failed : ",error);
    }
    setLoading(false);
  };

  return(
    <div className="p-6">
      <input type="file" onChange={handleFileUpload}/>
      <button 
      onClick={handleAnalyze}
      className="bg-blue-500 text-white p-4 rounded mt-4"
      disabled = {!file || isLoading}
      >
        {isLoading ? "Analyzing...":"Analyze Resume"}
      </button>
    </div>
  );
};

export default ResumeAnalyzer;