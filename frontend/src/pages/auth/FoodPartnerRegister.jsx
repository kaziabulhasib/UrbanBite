// FoodPartnerRegister.jsx
import React from "react";
import { Link } from "react-router-dom";

const FoodPartnerRegister = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-10'>
      <div
        className='w-full max-w-md bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-700 px-2 md:px-8 md:py-6 py-2'
        role='region'
        aria-labelledby='partner-register-title'>
        {/* Header */}
        <header className='text-center mb-4'>
          <h1
            id='partner-register-title'
            className='text-2xl font-semibold text-white'>
            Partner sign up
          </h1>
          <p className='text-gray-400 text-sm mt-1'>
            Grow your business with our platform.
          </p>
        </header>

        {/* Switch */}
        <nav className='text-center text-gray-400 text-sm mb-6'>
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
        <form className='space-y-2 '>
          {/* Business Name */}
          <div>
            <label
              htmlFor='businessName'
              className='block text-gray-300 text-sm mb-1'>
              Business Name
            </label>
            <input
              id='businessName'
              name='businessName'
              placeholder='Tasty Bites'
              autoComplete='organization'
              className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Contact Name + Phone */}
          <div className='flex space-x-4'>
            <div className='w-1/2'>
              <label
                htmlFor='contactName'
                className='block text-gray-300 text-sm mb-1'>
                Contact Name
              </label>
              <input
                id='contactName'
                name='contactName'
                placeholder='Jane Doe'
                autoComplete='name'
                className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='w-1/2'>
              <label
                htmlFor='phone'
                className='block text-gray-300 text-sm mb-1'>
                Phone
              </label>
              <input
                id='phone'
                name='phone'
                placeholder='+1 555 123 4567'
                autoComplete='tel'
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
              placeholder='business@example.com'
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
              placeholder='Create password'
              autoComplete='new-password'
              className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor='address'
              className='block text-gray-300 text-sm mb-1'>
              Address
            </label>
            <input
              id='address'
              name='address'
              placeholder='123 Market Street'
              autoComplete='street-address'
              className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <p className='text-xs text-gray-500 mt-1'>
              Full address helps customers find you faster.
            </p>
          </div>

          {/* Button */}
          <button
            type='submit'
            className='w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200'>
            Create Partner Account
          </button>
        </form>

        {/* Footer */}
        <div className='text-center text-gray-400 text-sm mt-6'>
          Already a partner?{" "}
          <Link
            to='/food-partner/login'
            className='text-blue-400 hover:underline'>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
