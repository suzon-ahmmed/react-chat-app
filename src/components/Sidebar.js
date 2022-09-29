import React from "react";
import ChatList from "./ChatList";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Sidebar({sodebar, toggleSidebar}) {
  return (
    <div className={sodebar? "sidebar block absolute left-0 top-0 bg-cyan-100 " :'sidebar bg-cyan-200/40 hidden relative lg:block'}>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Search />
      <ChatList />
    </div>
  );
}
