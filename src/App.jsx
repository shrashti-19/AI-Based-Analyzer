// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; 
import LandingPage from './components/LandingPage';
import Login from './components/Login'; 
import Signup from './components/Signup'; 
import Dashboard from './components/Dashboard'; 
import History from './components/History';
import Profile from './components/Profile';
import Results from './components/Results';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import Navbar from './components/Navbar';

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/results" element={<Results />} />
        <Route path="/resume-analysis" element={<ResumeAnalysis />} />

      </Routes>
    </Router>
  );
};

export default App;
