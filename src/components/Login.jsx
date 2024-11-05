import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { signInWithEmail, signInWithGoogle } from '../auth'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for remember me
  const navigate = useNavigate(); 

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password, rememberMe); // Pass rememberMe to your auth function
      // Redirect to dashboard or show success message
      navigate('/dashboard'); // Redirect to the desired page after login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/dashboard'); // Redirect to the desired page after login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup'); // Navigate to Signup page
  };

  const handleForgotPassword = () => {
    // Logic to handle forgot password (e.g., navigate to a password reset page)
    navigate('/forgot-password'); // Navigate to Forgot Password page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login to Your Account</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleEmailLogin} className="flex flex-col space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)} // Toggle remember me state
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm">Remember Me</label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Log In
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white p-2 rounded w-full mt-4 hover:bg-red-600 transition duration-200"
        >
          Log In with Google
        </button>
        
        {/* Forgot Password Link */}
        <p className="mt-4 text-center">
          <button onClick={handleForgotPassword} className="text-blue-500 underline">
            Forgot Password?
          </button>
        </p>

        {/* New User Signup Link */}
        <p className="mt-4 text-center">
          New user?{' '}
          <button onClick={handleSignupRedirect} className="text-blue-500 underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
