import React from 'react'
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ใช้ grid 3 คอลัมน์ */}
        <div className="grid grid-cols-3 h-16 items-center">

          {/* --- Left: Logo --- */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
            >
              SE NPRU Blog
            </Link>
          </div>

          {/* --- Center: Create --- */}
          <div className="flex justify-center">
            <Link
              to="/create"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Create Post
            </Link>
          </div>

          {/* --- Right: Login + Register --- */}
          <div className="flex justify-end space-x-6">
            <Link
              to="/login"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Log In
            </Link>

            <Link
              to="/register"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Register
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
