import React from "react";
import { useNavigate } from "react-router-dom";

const ResumeTemplates = ()=>{
    const navigate = useNavigate();

    const templates = [
        {
            name:'Professional',
            description: 'A clean, professional resume template for corporate jobs.',
            imageUrl: '/templates/template1.webp',
        },
        {
            name : 'Creative',
            description : 'A creative resume template for designers and artists',
            imageUrl : '/templates/template2.png'
        },
        {
            name : 'Minimal',
            description : 'A minimalist design for a simple and concise resume.',
            imageUrl : '/templates/template3.webp'
        }
    ];
    return(
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Choose a Resume template</h1>
                <p className="mt-2 text-lg text-gray-300">
                    Pick a template to start builing your resume.
                </p>
            </div>
            <div className="flex gap-6 justify-center mb-8">
                {templates.map((template,index)=>{
                   return(
                    <div 
                    key={index}
                    className="bg-gray-800 border-2 border-gray-700 rounded-lg w-80 p-4 flex flex-col items-center"
                    >
                    <img 
                    src={template.imageUrl}
                    alt={template.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold">{template.name}</h3>
                    <p className="text-gray-400">{template.description}</p>
                    <button
                    onClick={()=>navigate(`/resume-builder/${template.name.toLowerCase()}`)}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-whitepx-6 py-2 rounded-full"
                    >
                        Choose this template
                    </button>
                </div>
                   );
                })}
            </div>
        </div>
    )
};
export default ResumeTemplates;