import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import formValidate from "../util/formValidate";
import { firebaseAuth } from "../util/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import { USER_AVATAR } from "../util/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errors, setErrors] = useState({});
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
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
    if (Object.keys(formErrors).length !== 0) return;

    try {
      if (!isSignIn) {
        const userCredential = await createUserWithEmailAndPassword(
          firebaseAuth,
          emailValue,
          passwordValue
        );
        const signUpUser = userCredential.user;
        await updateProfile(signUpUser, {
          email: emailValue,
          displayName: fullNameValue,
          photoURL: USER_AVATAR,
        });
        const { uid, email, displayName } = firebaseAuth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USER_AVATAR,
          })
        );
      } else {
        const userCredential = await signInWithEmailAndPassword(
          firebaseAuth,
          emailValue,
          passwordValue
        );
        const signInUser = userCredential.user;
        console.log("signInUser", signInUser);
      }
    } catch (error) {
      const errorMap = {
        "auth/email-already-in-use": "This email is already registered.",
        "auth/invalid-email": "Invalid email address.",
        "auth/weak-password": "Password should be at least 6 characters.",
        "auth/user-not-found": "No user found with this email.",
        "auth/wrong-password": "Incorrect password.",
      };
      setErrors({ firebase: errorMap[error.code] || "Authentication failed" });
    }
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
        {errors.firebase && (
          <p className="text-red-500 text-sm mt-2 text-center">
            {errors.firebase}
          </p>
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
