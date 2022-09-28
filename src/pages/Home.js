import React, { useState } from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = ()=>{
    setSidebar((prevState)=> !prevState);
    console.log('toggleSidebar');
  }
  return (
    <div className='flex h-screen border-l-2 border-r-2 relative dark:border-gray-700'>
      <Sidebar sodebar={sidebar}/>
      <div className={sidebar ? 'backdrop-open left-[320px]': 'backdrop left-0'} onClick={toggleSidebar}></div>
      <Chat openSidebar={toggleSidebar}/>
    </div>
  )
}
