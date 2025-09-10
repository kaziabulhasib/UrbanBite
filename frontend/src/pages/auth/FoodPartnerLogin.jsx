// FoodPartnerLogin.jsx
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FoodPartnerLogin = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      `${baseUrl}/api/auth/foodpartner/login`,
      { email, password },
      { withCredentials: true }
    );

    console.log(response.data);

    navigate("/create-food");
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4'>
      <div
        className='w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg'
        role='region'
        aria-labelledby='partner-login-title'>
        {/* Header */}
        <header className='text-center'>
          <h1
            id='partner-login-title'
            className='text-2xl font-semibold text-white'>
            Partner login
          </h1>
          <p className='text-gray-400 text-sm mt-1'>
            Access your dashboard and manage orders.
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
              placeholder='business@example.com'
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
              placeholder='Password'
              autoComplete='current-password'
              className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Button */}
          <button
            type='submit'
            className='w-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200'>
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className='text-center text-gray-400 text-sm mt-4'>
          New partner?{" "}
          <Link
            to='/food-partner/register'
            className='text-blue-400 hover:underline'>
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
