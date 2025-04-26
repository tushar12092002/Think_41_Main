import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="bg-t-grey-2 h-screen flex flex-col items-center justify-center text-center text-t-blue-4 p-6">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <Link
        to="/"
        className="mt-6 bg-t-blue-1 text-white px-6 py-3 rounded-lg font-semibold hover:bg-t-blue-2 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
