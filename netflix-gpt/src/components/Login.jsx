import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
          srcSet="
            https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg 2000w,
            https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg 1279w,
            https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg 959w"
          alt="background-hero"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <form className="absolute w-full max-w-md p-14 bg-black bg-opacity-75 my-24 mx-auto left-0 right-0 text-white rounded-md transition-all duration-300">
        <h1 className="font-bold text-3xl mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {/* Smoothly show/hide Full Name input using opacity and pointer-events */}
        <div
          className={`transition-all duration-300 ${
            isSignIn
              ? "opacity-0 h-0 overflow-hidden"
              : "opacity-100 mb-3 h-auto"
          }`}
        >
          <input
            className="p-3 w-full rounded bg-neutral-800 placeholder-gray-400 text-white focus:outline-none"
            type="text"
            placeholder="Full name"
          />
        </div>

        <input
          className="p-3 my-3 w-full rounded bg-neutral-800 placeholder-gray-400 text-white focus:outline-none"
          type="email"
          placeholder="Email or phone number"
        />
        <input
          className="p-3 my-3 w-full rounded bg-neutral-800 placeholder-gray-400 text-white focus:outline-none"
          type="password"
          placeholder="Password"
        />
        <button className="p-3 my-4 bg-red-600 hover:bg-red-700 w-full rounded font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between items-center text-sm text-gray-400 mb-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox bg-gray-600" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>

        <div
          onClick={toggleSignIn}
          className="text-gray-400 text-sm cursor-pointer"
        >
          {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
          <span className="text-white hover:underline">
            {isSignIn ? "Sign up now" : "Sign in now"}
          </span>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
