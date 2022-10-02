import React, {useContext} from "react";
import { FiLogOut, FiX } from "react-icons/fi";
import {signOut} from "firebase/auth";
import { auth } from '../firebase'
import { AuthContext } from "../context/AuthContext";

export default function Navbar({ toggleSidebar }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center px-4 h-[70px] bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center space-x-2 ">
        <img
          src={currentUser.photoURL}
          className="w-10 h-10 rounded-full ring-2 ring-cyan-700 object-fill"
          alt=""
        />
        <p className="text-2xl w-40 leading-none truncate">
          {currentUser.displayName}
        </p>
      </div>
      <FiX className="lg:hidden font-bold text-3xl" onClick={toggleSidebar} />

      <button className="bg-white dark:bg-gray-800 border-t-2 dark:border-gray-600 hover:bg-sky-200  w-full flex justify-between items-center text-xl font-medium px-4 h-[55px] absolute bottom-0 left-0" onClick={()=>(signOut(auth))}>
        <span>Logout </span>

        <FiLogOut  />
      </button>
    </div>
  );
}
