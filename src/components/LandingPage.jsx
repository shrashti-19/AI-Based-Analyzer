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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Ratings from './Ratings';
import backgroundImage from '../assets/landing.png'; // Ensure this path is correct

const LandingPage = () => {
    const navigate = useNavigate();
    //function to handle button click
    const handleGetStarted = ()=>{
        navigate('/login');
    }
  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <header className="bg-gray-800 text-white p-4 bg-opacity-70">
        <h1 className="text-2xl font-bold text-center">AI-Based Resume Analyzer</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-semibold text-black">
          Welcome to the Future of Job Applications
        </h2>
        {/* Get Started Button */}
        <button
        onClick={handleGetStarted}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-500 focus:outline-none">
          Get Started
        </button>
        {/* Add more content here if needed */}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <Ratings /> {/* Place the Ratings component here */}
        <p className="mt-4">© 2024 AI-Based Resume Analyzer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
