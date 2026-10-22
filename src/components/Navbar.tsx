import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl tracking-wide text-indigo-400">DevBlog</span>
        <div className="flex space-x-4">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/posts" className={linkStyle}>Posts</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
          <NavLink to="/dashboard" className={linkStyle}>Dashboard</NavLink>
        </div>
      </div>
    </nav>
  )
}