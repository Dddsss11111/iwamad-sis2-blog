import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>DevBlog</div>
        <nav style={styles.nav}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
          >
            Posts
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
          >
            Dashboard
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    backgroundColor: '#1f2937',
    padding: '1rem 2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#6366f1',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#d1d5db',
    textDecoration: 'none',
    padding: '0.5rem 0.8rem',
    borderRadius: '6px',
    fontWeight: 500,
  },
  activeLink: {
    color: '#ffffff',
    backgroundColor: '#4f46e5',
    textDecoration: 'none',
    padding: '0.5rem 0.8rem',
    borderRadius: '6px',
    fontWeight: 500,
  },
}