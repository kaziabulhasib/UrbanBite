import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const UserLogin = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      `${baseUrl}/api/auth/user/login`,
      { email, password },
      { withCredentials: true }
    );

    console.log(response.data);

    navigate("/"); 
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4'>
      <div
        className='w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700'
        role='region'
        aria-labelledby='user-login-title'>
        {/* Header */}
        <header className='text-center'>
          <h1
            id='user-login-title'
            className='text-2xl font-semibold text-white'>
            Welcome back
          </h1>
          <p className='text-gray-400 text-sm mt-1'>
            Sign in to continue your food journey.
          </p>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
          {/* Email */}
          <div>
            <label htmlFor='email' className='block text-gray-300 text-sm mb-1'>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='you@example.com'
              autoComplete='email'
              className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor='password'
              className='block text-gray-300 text-sm mb-1'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              placeholder='••••••••'
              autoComplete='current-password'
              className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='w-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200'>
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className='text-center text-gray-400 text-sm mt-4'>
          New here?{" "}
          <Link to='/user/register' className='text-blue-400 hover:underline'>
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
