import React from "react";
import { Link } from "react-router-dom";
const NotAllowed = () => {
    return (
        <div className="flex justify-center items-center py-20 min-h-[60vh]">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-8 text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">403</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Access Denied
                </h2>
                <p className="text-gray-600 mb-8">
                    You do not have permission to view this page.
                </p>
                <a
                    href="/"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default NotAllowed;
