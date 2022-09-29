import React from "react";
// import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}
      <main>
        <div className="xl:container h-full">{children}</div>
      </main>
    </>
  );
}
