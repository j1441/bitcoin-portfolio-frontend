import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-300 text-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to the Bitcoin Portfolio Tracker</h1>
      <p className="text-white mb-4">
        This application allows you to track your Bitcoin holdings and view the
        current value of your portfolio.
      </p>
      <p className="text-white mb-8">
        Built with a modern tech stack including Next.js, React, TypeScript, and
        a Go-based backend, this project was developed to showcase my skills in
        full-stack development. A mobile iOS app is also available at ... built using Flutter.
      </p>

      <div className="mb-8">
        <img
          src="/bitcoin.png"
          alt="Bitcoin"
          style={{ width: '100px', height: 'auto' }} // Slightly larger size
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-md">
        <Link href="/login">
          <a className="block text-white bg-orange-500 px-6 py-4 rounded shadow hover:bg-orange-600 transition duration-300 text-lg">
            Log In
          </a>
        </Link>
        <Link href="/signup">
          <a className="block text-white bg-orange-500 px-6 py-4 rounded shadow hover:bg-orange-600 transition duration-300 text-lg">
            Sign Up
          </a>
        </Link>
        <Link href="/about">
          <a className="block text-white bg-orange-700 px-6 py-4 rounded shadow hover:bg-orange-800 transition duration-300 font-bold text-lg">
            About This Project
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
