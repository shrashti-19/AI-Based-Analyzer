import React, { useState } from "react";

const ForgotPassword = ()=>{
  //state hooks for email, success message, error message
  const [email,setEmail] = useState('');
  const [message , setMessage] = useState('');
  const [error , setError] = useState('');
  const [loading , setLoading] = useState(false);

  //handle the form submission for sending the reset link
  const handleResetPassword  = async(e)=>{
    e.preventDefault();
    setLoading(true);

    try{
      await sendResetLink(email);
      setMessage('A reset link has been sent to your mail');
      setError('');
    }catch(err){
      setError('Failed to sent reset link. Please check your mail and try again');
      setMessage('');
    }finally{
      setLoading(false);
    }
  };
  return(
    <div className="flex flex-col items center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-xl font-semibold text-center mb-4 text-gray-800">
          Forgot Password
        </h1>
        {/*Success or Error messages*/}
        {message && <p className="text-sm text-green-600 text-cener">{message}</p>}
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        {/* Reset Password Form*/}
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Enter your Email : 
            </label>
            <input
            type = "email"
            id="email"
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            placeholder="example@example.com"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></input>
          </div>
          <button
          type="submit"
          className={`w-full p-2 text-white font-medium rounded-md transition duration-200${
            loading? 'bg-blue-300 cursor-not-allowed':'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={loading} //disable the button while loading
          >
            {loading ? 'Sending .. ' : 'Send Reset Link'}

          </button>
        </form>
      </div>
    </div>
  )
};
export default ForgotPassword;