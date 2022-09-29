import React from "react";
import { FiFolderPlus } from "react-icons/fi";
import Logo from "../assets/images/send.png";

export default function Input() {
  return (
    <div className="w-full flex justify-between h-[55px] px-4 items-center bg-white shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <input
        type="text"
        placeholder="Write your message"
        className="bg-transparent outline-none sm:w-4/5 w-3/4"
      />
      <div className="flex items-center space-x-4">
        <label className="text-xl">
          <FiFolderPlus />
          <input type="file" className="hidden" />
        </label>
        <button className="bg-sky-400/20 dark:bg-sky-400/30 hover:bg-sky-400/30 dark:hover:bg-sky-400/20 w-14 h-9 rounded flex items-center justify-center">
            <img src={Logo} className="w-8" alt="" />
        </button>
      </div>
    </div>
  );
}
