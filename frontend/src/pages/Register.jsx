import React from "react";
import Header from "../components/Header";

const Register = () => {
  return <><div className="bg-[url('/assets/Colprobg3.jpg')] bg-cover bg-center h-screen w-full">
    
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 ">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-20 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
    New here? Where have been fucker?
    </h2>
  </div>

  <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
    <form action="#" method="POST" className="py-7 px-4 bg-sky-200 space-y-6 rounded-md shadow-xl">
      <div>
        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
          Username
        </label>
        <div className="mt-2">
        <input
          id="username"
          name="username"
          type="text"
          required
          placeholder="Enter your username"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>

      </div>
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="password"
            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="mt-4">
<span className="block text-sm font-medium text-gray-900 mb-2">
  Select Role
</span>
<div className="flex items-center space-x-4">
  <label className="flex items-center">
    <input
      type="radio"
      name="role"
      value="ADMIN"
      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
    />
    <span className="ml-2 text-gray-700">Admin</span>
  </label>

  <label className="flex items-center">
    <input
      type="radio"
      name="role"
      value="MEMBER"
      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
    />
    <span className="ml-2 text-gray-700">Member</span>
  </label>
  </div>
  </div>
      

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 
          text-sm/6 font-semibold text-white shadow-xs hover:bg-cyan-900 
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Sign Up
        </button>
      </div>
    </form>

    
  </div>
</div>
</div></>
};

export default Register;