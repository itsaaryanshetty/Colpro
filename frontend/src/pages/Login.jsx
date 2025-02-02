import React from "react";


const Login = () => {
  return <>
  <div className="bg-[url('/assets/Colprobg3.jpg')] bg-cover bg-center h-screen w-full ">
     
  <div className="flex min-h-full flex-1 flex-col px-6 py-6 lg:px-8 ">
    {/* <h1 className=" text-center text-6xl text-cyan-900 font-bold">Colpro</h1> */}
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-20 text-center text-2xl/9 font-bold tracking-tight text-sky-950">
        Sign in to your account
      </h2>
    </div>
    
    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" className="py-12 px-4 bg-sky-200 space-y-6 rounded-md shadow-xl">
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
              placeholder="Email address"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="Enter your password"
              className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Log in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?{' '}
        <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
          Sign Up
        </a>
      </p>
    </div>
  </div>
  </div>
</>
};

export default Login;