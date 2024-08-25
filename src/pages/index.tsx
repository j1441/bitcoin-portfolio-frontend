import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center justify-center">
      <Navigation />
      <div className="text-center p-6 bg-white rounded shadow-md w-full max-w-lg">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">Welcome to the Bitcoin Portfolio Tracker</h1>
        <p className="text-gray-700 mb-6">
          This application allows you to track your Bitcoin holdings and view the current value of your portfolio.
        </p>
        <p className="text-gray-700 mb-6">
          Built with a modern tech stack including Next.js, React, TypeScript, and a Go-based backend, this project was developed to showcase my skills in full-stack development.
        </p>
        <div className="mb-8">
          <img src="/bitcoin.png" alt="Bitcoin" className="mx-auto max-w-xs" />
        </div>
        <div className="space-x-4">
          <Link href="/login">
            <a className="text-lg text-orange-600 hover:text-orange-800">Log In</a>
          </Link>
          <Link href="/signup">
            <a className="text-lg text-orange-600 hover:text-orange-800">Sign Up</a>
          </Link>
          <Link href="/about">
            <a className="text-lg text-orange-600 hover:text-orange-800 font-bold">About This Project</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
