import React from 'react'
import { NavLink } from 'react-router-dom'

type NavbarProps = {
  isAuthenticated: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '1rem' }}>
      <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Home
      </NavLink>
      <NavLink to="/posts" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Posts
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Contact
      </NavLink>
      <NavLink to="/dashboard" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Dashboard {isAuthenticated ? '(Auth)' : ''}
      </NavLink>
    </nav>
  )
}