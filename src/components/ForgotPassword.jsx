import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      
      await sendResetLink(email);
      setMessage('Reset link has been sent to your email.');
      setError(''); // Clear any previous error messages
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
      setMessage(''); // Clear any previous success messages
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleResetPassword} className="flex flex-col space-y-4">
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
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

// Mock function to simulate sending a reset link
const sendResetLink = async (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email) {
        resolve();
      } else {
        reject(new Error('Invalid email'));
      }
    }, 1000);
  });
};

export default ForgotPassword;
