import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const WarhouseLayout = () => {
  return (
    <main className="relative flex flex-col min-h-screen pb-4">
      <div className="absolute inset-0 bg-black bg-[url('./assets/bg.png')] bg-cover bg-center -z-20" />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md -z-10" />
      <Navbar />
      <section className="flex-1">
        <Outlet />
      </section>
    </main>
  );
};

export default WarhouseLayout;
