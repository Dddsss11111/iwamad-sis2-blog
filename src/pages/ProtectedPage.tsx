import React from 'react'

type ProtectedPageProps = {
  onLogout: () => void
}

export const ProtectedPage: React.FC<ProtectedPageProps> = ({ onLogout }) => {
  return (
    <div>
      <h2>Protected Dashboard</h2>
      <p>Welcome! You are successfully signed in and viewing a protected route.</p>
      <button onClick={onLogout}>Sign Out</button>
    </div>
  )
}