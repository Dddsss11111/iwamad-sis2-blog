import React from 'react'
import { useNavigate } from 'react-router-dom'

type LoginProps = {
  onLogin: () => void
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    onLogin()
    navigate('/dashboard') // Автоматически перенаправляем на Dashboard после входа
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Sign In Required</h2>
      <p>Please sign in to access the protected dashboard page.</p>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}