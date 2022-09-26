import React from "react";
// import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
}
