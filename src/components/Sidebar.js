import React from "react";
import ChatList from "./ChatList";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Sidebar({sodebar}) {
  return (
    <div className={sodebar? "sidebar block absolute left-0 top-0 bg-cyan-100 " :'sidebar bg-cyan-200/40 hidden relative lg:block'}>
      <Navbar />
      <Search />
      <ChatList />
    </div>
  );
}
