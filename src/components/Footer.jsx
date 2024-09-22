import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-10 bg-gray-900">
      <div className="container max-w-7xl mx-auto px-5 sm:px-6 py-4">
        <p className="text-center text-slate-200 text-sm">
          &copy; 2024
          {' '}
          <Link
            to="https://github.com/w4lner/03-Virtual_Shop"
            className="text-lime-500 hover:text-lime-600 transition duration-100 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
            title="VShop github repo"
          >
            VShop.
          </Link>
          {' '}
          Made with
          {' '}
          <span
            role="img"
            aria-label="love"
          >
            ❤️
          </span>
          {' '}
          by
          {' '}
          <Link
            to="https://github.com/w4lner"
            className="text-lime-500 hover:text-lime-600 transition duration-100 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
            title="w4lner"
          >
           w4lner
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
