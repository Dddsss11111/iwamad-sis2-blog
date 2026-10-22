import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

type LayoutProps = {
  isAuthenticated: boolean
}

export const Layout: React.FC<LayoutProps> = ({ isAuthenticated }) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Navbar isAuthenticated={isAuthenticated} />
      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}