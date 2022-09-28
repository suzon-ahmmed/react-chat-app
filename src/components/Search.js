import React from 'react'
import User from '../assets/images/user.jpg'

export default function Search() {
  return (
    <div>
        <div className='px-4 py-2 border-b-2 dark:bg-gray-800 dark:border-gray-700'>
            <input type="text" className='bg-transparent outline-none focus:outline-none'  placeholder='search' />
        </div>
        <div className='px-4 py-2 flex items-center space-x-2 hover:bg-cyan-300/40'>
        <img src={User} className="w-10 h-10 rounded-full ring-2 ring-cyan-700 object-contain"  alt="" />
        <div>
            <p className='font-semibold'>User Name</p>
        </div>
        </div>
     
    </div>
  )
}
