import React,{useState,useEffect} from "react";
import axios from 'axios';

const ApplicationTracking = ()=>{
    const[applications,setApplications] = useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        axios //send asynchronous http request to rest endpoints
        .get("https://api.example.com/applications")
        .then((response)=>{
            setApplications(response.data);
            setLoading(false);
        })
        .catch((error)=> {
            console.error("Error",error);
            setLoading(false);
        });

    },[]);

    if(loading) return <div>Loading Applications..</div>;
    return(
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Application Tracking</h2>
            <div className="space-y-4">
               {applications.map((app,index)=>(
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">{app.jobTitle}</h3>
                    <p className="text-sm text-gray-400">Applied on: {app.date}</p>
                    <p className="mt-2">Status: {app.status}</p>
                </div>

               ))}
        </div>
    </div>
    );
};

export default ApplicationTracking;