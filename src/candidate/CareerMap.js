import React, { useEffect, useState } from "react";
import axios from 'axios';

const CareerMap = ()=>{
    const [carrerPaths,setCareerPaths] = useState();
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        axios
        .get("https://api.example.com/career-map")
        .then((response)=>{
            setCareerPaths(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("error fetching career map:",error);
            setLoading(false);
            
        });

    },[]);

    if (loading) return <div>Loading career paths...</div>

    return(
        <div className="min-h-screen bg-gray-900 text-white p-8">
        <h2 className="text-2xl font-bold mb-4">Career Map</h2>
        <div className="space-y-4">
          {careerPaths.map((path, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{path.title}</h3>
              <p className="mt-2">{path.description}</p>
              <p className="mt-2 text-gray-500">Suggested by: {path.source}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
export default CareerMap;