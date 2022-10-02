import React, { useContext } from "react";
import Toggle from "./themeContext/Toggle";
import { FiAlignLeft, FiSettings } from "react-icons/fi";
import { FaPeopleArrows } from "react-icons/fa";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

export default function Chat({ openSidebar }) {
  const { data } = useContext(ChatContext);
  // console.log(data);
  return (
    <div className="lg:w-full w-full h-full">
      <header className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center px-4 h-[70px] w-full">
        <div className="flex space-x-3">
          <button onClick={openSidebar} className="block lg:hidden">
            <FiAlignLeft className="text-3xl" />
          </button>
          <FaPeopleArrows className="text-3xl hidden lg:block" />
          <p className="font-semibold text-xl">{data.user.displayName ? data.user.displayName : <span>Select your friend</span>}</p>
        </div>
        <div className="flex items-center space-x-4">
          <FiSettings />
          <Toggle />
        </div>
      </header>
      <Messages />
      <Input />
    </div>
  );
}
