import React from 'react'
import User from '../assets/images/user.jpg'
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className='flex justify-between items-center px-4 h-[78px] border-b-2 dark:bg-gray-800 dark:border-gray-700 '>
        <div className='flex items-center space-x-2'>
            <img src={User} className="w-12 h-12 rounded-full ring-2 ring-cyan-700 object-contain"  alt="" />
            <p className='font-semibold text-2xl w-40 leading-none truncate'>User Name</p>
        </div>
        <button><FiLogOut className='text-2xl font-bold' /></button>
    </div>
  )
}
