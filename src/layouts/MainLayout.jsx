import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar (fixed) */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 shadow-sm">
        <Navbar />
      </header>

      {/* Background Gradient */}
      <div className="flex-1 bg-gradient-to-b from-violet-600 via-purple-600 to-blue-600 pt-20 pb-16">
        {/* Main Content (Card zone) */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
