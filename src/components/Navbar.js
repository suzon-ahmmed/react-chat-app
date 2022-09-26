import React from "react";
import Toggle from "./themeContext/Toggle";
import logo from "../assets/images/Tailwind.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-800/75">
      <div className="flex items-center justify-between container h-[60px]  text-slate-700 dark:text-slate-200">
        <div>
          <Link
            to="/"
            className="flex items-center space-x-2 font-medium text-[22px] text-slate-900 dark:text-white"
          >
            <img src={logo} alt="tailwind" className="w-9 h-9" />
            <span>Chat App</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6 text-sm font-semibold">
          <Link to="/">
            <span>Login</span>
          </Link>{" "}
          <Link to="/home">
            <span>Home</span>
          </Link>{" "}
          <Link to="/signup">
            <span>Signup</span>
          </Link>
          <Toggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
