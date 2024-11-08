// // src/components/LandingPage.jsx
// import React from 'react';
// import Ratings from './Ratings';
// import backgroundImage from '../assets/landing.png'

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between">
//       <header className="bg-gray-800 text-white p-4">
//         <h1 className="text-2xl font-bold text-center">AI-Based Resume Analyzer</h1>
//       </header>

//       <main className="flex-grow flex items-center justify-center">
//         <h2 className="text-3xl font-semibold">Welcome to the Future of Job Applications</h2>
//         <button className="button">
//           Get Started
//         </button>
//         {/* Add more content here */}
//       </main>

//       <footer className="bg-gray-800 text-white p-4 text-center">
//         <Ratings /> {/* Place the Ratings component here */}
//         <p className="mt-4">© 2024 AI-Based Resume Analyzer. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

// src/components/LandingPage.jsx

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Ratings from './Ratings';
// import backgroundImage from '../assets/landing.png'; // Ensure this path is correct

// const LandingPage = () => {
//     const navigate = useNavigate();
//     //function to handle button click
//     const handleGetStarted = ()=>{
//         navigate('/login');
//     }
//   return (
//     <div
//       className="min-h-screen flex flex-col justify-between"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <header className="bg-gray-800 text-white p-4 bg-opacity-70">
//         <h1 className="text-2xl font-bold text-center">AI-Based Resume Analyzer</h1>
//       </header>

//       <main className="flex-grow flex flex-col items-center justify-center text-center">
//         <h2 className="text-3xl font-semibold text-black">
//           Welcome to the Future of Job Applications
//         </h2>
//         {/* Get Started Button */}
//         <button
//         onClick={handleGetStarted}
//         className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-500 focus:outline-none">
//           Get Started
//         </button>
//         {/* Add more content here if needed */}
//       </main>

//       <footer className="bg-gray-800 text-white p-4 text-center">
//         <Ratings /> {/* Place the Ratings component here */}
//         <p className="mt-4">© 2024 AI-Based Resume Analyzer. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

// src/components/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Ratings from './Ratings';
import backgroundImage from '../assets/landing.png'; // Ensure this path is correct
import { FaStar } from 'react-icons/fa';

const LandingPage = () => {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/login');
    };

    return (
        <div
            className="min-h-screen flex flex-col justify-between text-gray-800"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <header className="bg-gray-900 text-white p-4 bg-opacity-70 shadow-md">
                <h1 className="text-2xl font-bold text-center">
                    AI-Based Resume Analyzer
                </h1>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center text-center p-6 space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800 shadow-lg">
                    Welcome to the Future of Job Applications
                </h2>
                <p className="text-lg text-gray-600 max-w-lg mx-auto">
                    Boost your chances with data-driven resume insights tailored just for you.
                </p>

                <button
                    onClick={handleGetStarted}
                    className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-500 focus:outline-none"
                >
                    Get Started
                </button>

                {/* Features Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4 bg-white bg-opacity-70 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Analyze Resumes</h3>
                        <p>Get instant feedback on your resume content and structure.</p>
                    </div>
                    <div className="p-4 bg-white bg-opacity-70 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Detailed Feedback</h3>
                        <p>Receive specific, actionable tips to improve each section.</p>
                    </div>
                    <div className="p-4 bg-white bg-opacity-70 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Improve Your Chances</h3>
                        <p>Optimize your resume and increase the chances of landing a job.</p>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-900 text-white p-6">
                <div className="mb-4">
                    <Ratings /> {/* Place the Ratings component here */}
                    <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                        ))}
                    </div>
                </div>
                <p>© 2024 AI-Based Resume Analyzer. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
