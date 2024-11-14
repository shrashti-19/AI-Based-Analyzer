// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; 
import LandingPage from './components/LandingPage';
import Login from './components/Login'; 
import Signup from './components/Signup'; 
import Dashboard from './components/Dashboard'; 
import Pricing from './components/Pricing';
import CandidateProfile from './candidate/CandidateProfile';
import AIResumeWriter from './candidate/AIResumeWriter';
import ApplicationTracking from './candidate/ApplicationTracking';
import JobSearch from './candidate/Jobsearch';
import DocumentUpload from './candidate/DocumentUpload';
import Notifications from './candidate/Notifications';
const App = () => {
  const [user, setUser] = useState(null); // State to hold user info

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the current user to state
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Public route for login with redirect if user is authenticated */}
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" /> : <Login />} 
        />

        <Route 
          path="/signup" 
          element={user ? <Navigate to="/dashboard" /> : <Signup />} 
        />
        
        {/* Private routes, accessible only when user is authenticated */}
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} 
        />
        <Route
        path="/pricing" element ={<Pricing/>}/>


        <Route path="/candidate-profile" element={<CandidateProfile/>} />
        <Route path ="/candidate-AIResumeWriter" element = {<AIResumeWriter/>}/>
        <Route path ="/candidate-applicationtracker" element = {<ApplicationTracking/>}/>
        <Route path = "/candidate-documentUpload" element = {<DocumentUpload/>}/>
        <Route path = "/candidate-jobSearch" element = {<JobSearch/>}/>
        <Route path ="/candidate-notifications" element = {<Notifications/>}/>
      </Routes>
    </Router>
  );
};

export default App;
