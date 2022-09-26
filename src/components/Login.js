import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/send.png";
import Toggle from "./themeContext/Toggle";

export default function Login() {
  return (
    <div>
      <form
        action="#"
        className="h-[calc(100vh)] flex justify-center items-center "
      >
        <div className="py-8 px-8 bg-white rounded-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700 z-20 w-80 sm:w-[420px] relative flex flex-col items-center justify-center">
            <div className="absolute top-2 right-2">
                <Toggle />
            </div>
          <div className="bg-sky-400/20 dark:bg-sky-400/30 w-16 h-16 rounded-lg flex items-center justify-center">
            <img src={Logo} className="w-12" alt="" />
          </div>
          <div className="w-full mt-2">
            <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-600 to-sky-800 mb-2 text-2xl">
              Login
            </h2>
            <p className="text-sm mb-3 font-semibold tracking-wide cursor-pointer">
              Please log in to your account.
            </p>
          </div>
          <input
            type="text" required
            placeholder="Email Addres"
            className="block text-sm py-3 px-4 my-3 focus:border-cyan-400 rounded-lg w-full border outline-none bg-transparent"
          />
          <input
            type="password" required
            placeholder="Password"
            className="block text-sm py-3 px-4 my-3  focus:border-cyan-400 rounded-lg w-full border outline-none bg-transparent"
          />

          <button className="gradient-btn">
            Login
          </button>
          <p className="mt-3 text-sm">
            Already Have An Account?{" "}
            <Link to="/signup">
              <span className="underline cursor-pointer text-cyan-400 hover:text-sky-600 font-semibold">
                {" "}
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
