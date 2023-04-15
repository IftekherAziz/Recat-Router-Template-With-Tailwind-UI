import React from "react";

const Login = () => {
  return (
    <div className="max-w-xl mx-auto my-12 px-8">
      <div className=" relative ">
        <label for="email" className="text-gray-700">
          Enter Your Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-2 rounded-sm border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="email"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="mt-3 relative ">
        <label for="password" className=" text-gray-700">
          Enter Your Password
        </label>
        <input
          type="password"
          id="password"
          className=" mt-2 rounded-sm border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="password"
          placeholder="*********"
          required
        />
      </div>
      <div className="mt-4 relative ">
        <button
          type="button"
          class="py-3 px-4 rounded-sm  bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
