import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:text-5xl">
        Welcome to My Blog
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Explore articles about React, TypeScript, web development, and modern frontend tools.
      </p>
      <Link
        to="/posts"
        className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Read Articles
      </Link>
    </div>
  )
}