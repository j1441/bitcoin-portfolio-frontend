import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  const handleLogoClick = () => {
    const container = document.createElement('div');
    container.className = 'logo-rain-container';
    document.body.appendChild(container);

    for (let i = 0; i < 50; i++) {
      const img = document.createElement('img');
      img.src = '/bitcoin.png';
      img.className = 'logo-rain';
      img.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      img.style.animationDelay = `${Math.random() * 2}s`; // Random delay
      container.appendChild(img);
    }

    setTimeout(() => {
      container.remove();
    }, 5000); // Remove the container after 5 seconds
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-300 text-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to the Bitcoin Portfolio Tracker</h1>
      
      <div className="bg-white p-6 rounded shadow-md max-w-2xl mb-8">
        <p className="text-gray-800 mb-4">
          This application allows you to track your Bitcoin holdings and view the
          current value of your portfolio.
        </p>
        <p className="text-gray-800 mb-4">
          Built with a modern tech stack including Next.js, React, TypeScript, and
          a Go-based backend, this project was developed to showcase my skills in
          full-stack development. A mobile iOS app is also available at (waiting for beta review in order to provide TestFlight link, iOS app is otherwise working) built using Flutter.
        </p>
      </div>

      <div className="mb-8">
        <img
          src="/bitcoin.png"
          alt="Bitcoin"
          className="bitcoin-logo cursor-pointer"
          onClick={handleLogoClick}
          style={{ width: '100px', height: 'auto' }}
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
