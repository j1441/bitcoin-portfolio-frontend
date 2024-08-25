import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Bitcoin Portfolio Tracker</h1>
      <p>
        This application allows you to track your Bitcoin holdings and view the
        current value of your portfolio.
      </p>
      <p>
        Built with a modern tech stack including Next.js, React, TypeScript, and
        a Go-based backend, this project was developed to showcase my skills in
        full-stack development.
      </p>

      <div style={{ margin: '40px 0' }}>
        <img
          src="/bitcoin.png"
          alt="Bitcoin"
          style={{ maxWidth: '10%', height: 'auto' }}
        />
      </div>

      <div>
        <Link href="/login">
          <a style={{ marginRight: '15px', fontSize: '18px', color: '#0070f3' }}>
            Log In
          </a>
        </Link>
        <Link href="/signup">
          <a style={{ marginRight: '15px', fontSize: '18px', color: '#0070f3' }}>
            Sign Up
          </a>
        </Link>
        <Link href="/about">
          <a style={{ fontSize: '18px', color: '#0070f3', fontWeight: 'bold' }}>
            About This Project
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
