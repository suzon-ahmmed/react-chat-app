import React from "react";
import Toggle from "./themeContext/Toggle";
import { FiAlignLeft, FiSettings } from "react-icons/fi";
import { FaPeopleArrows } from "react-icons/fa";

export default function Chat({ openSidebar }) {
  return (
    <div className="lg:w-full w-screen h-screen">
      <header className="bg-cyan-200/40 dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center px-4 h-[78px] w-full border-b-2">
        <div className="flex space-x-3">
          <button onClick={openSidebar} className='block lg:hidden'>
            <FiAlignLeft className="text-3xl" />
          </button>
          <FaPeopleArrows  className='text-3xl hidden lg:block'/>
          <p className="font-semibold text-xl">Current Chat</p>
        </div>
        <div className="flex items-center space-x-4">
          <FiSettings />
          <Toggle />
        </div>
      </header>
    </div>
  );
}
