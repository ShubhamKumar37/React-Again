import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">404</h1>
      <p className="text-xl text-gray-700 mb-8">Oops! The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
