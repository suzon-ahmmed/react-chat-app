import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container mt-[60px]">{children}</div>
      </main>
    </>
  );
}
