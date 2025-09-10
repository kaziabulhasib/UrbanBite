import React from "react";
import { Link } from "react-router-dom";

const UserRegister = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4'>
      <div
        className='w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700'
        role='region'
        aria-labelledby='user-register-title'>
        {/* Header */}
        <header className='text-center'>
          <h1
            id='user-register-title'
            className='text-2xl font-semibold text-white'>
            Create your account
          </h1>
          <p className='text-gray-400 text-sm mt-1'>
            Join to explore and enjoy delicious meals.
          </p>
        </header>

        {/* Switch */}
        <nav className='text-center text-gray-400 text-sm mt-3'>
          <span className='font-semibold text-white'>Switch:</span>{" "}
          <Link to='/user/register' className='text-blue-400 hover:underline'>
            User
          </Link>{" "}
          •{" "}
          <Link
            to='/food-partner/register'
            className='text-blue-400 hover:underline'>
            Food partner
          </Link>
        </nav>

        {/* Form */}
        <form className='mt-6 space-y-4'>
          {/* First + Last Name */}
          <div className='flex space-x-3'>
            <div className='w-1/2'>
              <label
                htmlFor='firstName'
                className='block text-gray-300 text-sm mb-1'>
                First Name
              </label>
              <input
                id='firstName'
                name='firstName'
                placeholder='Jane'
                autoComplete='given-name'
                className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='w-1/2'>
              <label
                htmlFor='lastName'
                className='block text-gray-300 text-sm mb-1'>
                Last Name
              </label>
              <input
                id='lastName'
                name='lastName'
                placeholder='Doe'
                autoComplete='family-name'
                className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
          </div>

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
              className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
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
              autoComplete='new-password'
              className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='w-full py-2 mt-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200'>
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className='text-center text-gray-400 text-sm mt-4'>
          Already have an account?{" "}
          <Link to='/user/login' className='text-blue-400 hover:underline'>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
