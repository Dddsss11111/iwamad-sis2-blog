import React from 'react'

type LoginProps = {
  onLogin: () => void
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div>
      <h2>Sign In Required</h2>
      <p>Please sign in to access the protected dashboard page.</p>
      <button onClick={onLogin}>Sign In</button>
    </div>
  )
}