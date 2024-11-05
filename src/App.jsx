// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import ForgotPassword from './components/ForgotPassword';

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
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
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
          path="/history" 
          element={user ? <History /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/profile" 
          element={user ? <Profile /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/results" 
          element={user ? <Results /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/resume-analyzer" 
          element={user ? <ResumeAnalyzer /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
