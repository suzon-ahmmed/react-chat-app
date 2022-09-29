import React, { useState } from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  return (
    <div className="xl:h-[calc(100vh-32px)] h-screen xl:my-4">
      <div className="flex h-full relative bg-white xl:rounded-2xl overflow-hidden drop-shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <Sidebar sodebar={sidebar} toggleSidebar={toggleSidebar} />
        <div
          className={sidebar ? "backdrop-open left-[320px]" : "backdrop left-0"}
          onClick={toggleSidebar}
        ></div>
        <Chat openSidebar={toggleSidebar} />
      </div>
    </div>
  );
}
