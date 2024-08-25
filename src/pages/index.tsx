import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-100 text-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to the Bitcoin Portfolio Tracker</h1>
      <p className="text-white mb-4">
        This application allows you to track your Bitcoin holdings and view the
        current value of your portfolio.
      </p>
      <p className="text-white mb-8">
        Built with a modern tech stack including Next.js, React, TypeScript, and
        a Go-based backend, this project was developed to showcase my skills in
        full-stack development.
      </p>

      <div className="mb-8">
        <img
          src="/bitcoin.png"
          alt="Bitcoin"
          style={{ width: '50px', height: 'auto' }} // Set fixed size
        />
      </div>

      <div className="space-x-4">
        <Link href="/login">
          <a className="text-white bg-orange-500 px-6 py-2 rounded shadow hover:bg-orange-600 transition duration-300">
            Log In
          </a>
        </Link>
        <Link href="/signup">
          <a className="text-white bg-orange-500 px-6 py-2 rounded shadow hover:bg-orange-600 transition duration-300">
            Sign Up
          </a>
        </Link>
        <Link href="/about">
          <a className="text-white bg-orange-700 px-6 py-2 rounded shadow hover:bg-orange-800 transition duration-300 font-bold">
            About This Project
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
