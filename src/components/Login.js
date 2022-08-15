import React from "react";
import img from "../assets/img.jpg";
import hacker from "../assets/hacker.png";
const Login = () => {
  return (
    <div className="grid grid-cols-1 h-screen w-full sm:grid-cols-2  ">
      <div className="hidden sm:block ">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="bg-sky-900 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-sky-900 p-8 px-8 rounded-lg">
          <div className="flex justify-center pb-4">
            <img className=" text-center w-20 h-20 " src={hacker} alt="" />
          </div>
          <h2 className="text-4xl dark:text-white font-bold text-center">
            SIGN IN
          </h2>

          <div className="flex flex-col text-sky-400 py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-sky-700 mt-2 p-2 focus:border-sky-500 focus:bg-sky-800 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-sky-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-sky-700 mt-2 p-2 focus:border-sky-500 focus:bg-sky-800 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex justify-between text-sky-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="radio" /> Remember Me
            </p>
            <p className="cursor-pointer">Forgot Password?</p>
          </div>
          <button
            type="submit"
            className="w-full my-5 py-2 text-white font-semibold rounded-lg bg-emerald-500 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
