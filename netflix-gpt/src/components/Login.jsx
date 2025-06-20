import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import formValidate from "../util/formValidate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errors, setErrors] = useState({});
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const toggleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  const formSubmitHandler = () => {
    const fullNameValue = fullNameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const formErrors = formValidate(
      fullNameValue,
      emailValue,
      passwordValue,
      isSignIn
    );
    setErrors(formErrors);
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
          alt="background-hero"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full max-w-md p-14 bg-black bg-opacity-75 my-24 mx-auto left-0 right-0 text-white rounded-md transition-all duration-300"
      >
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
            ref={fullNameRef}
            className="p-3 w-full rounded bg-neutral-800 placeholder-gray-400 text-white focus:outline-none"
            type="text"
            placeholder="Full name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <input
          ref={emailRef}
          className="p-3 my-3 w-full rounded bg-neutral-800 placeholder-gray-400 text-white focus:outline-none"
          type="email"
          placeholder="Email or phone number"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
        <input
          ref={passwordRef}
          className="p-3 my-3 w-full rounded bg-neutral-800 placeholder-gray-400 text-white focus:outline-none"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
        <button
          onClick={formSubmitHandler}
          className="p-3 my-4 bg-red-600 hover:bg-red-700 w-full rounded font-semibold"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between items-center text-sm text-gray-400 mb-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox bg-gray-600" />
            <span>Remember me</span>
          </label>
          <Link to="" className="hover:underline">
            Need help?
          </Link>
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
          <Link to="" className="text-blue-600 hover:underline">
            Learn more.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
