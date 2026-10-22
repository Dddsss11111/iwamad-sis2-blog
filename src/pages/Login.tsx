import React from 'react'
import { useNavigate } from 'react-router-dom'

type LoginProps = {
  onLogin: () => void
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    onLogin()
    navigate('/dashboard')
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Sign In Required</h2>
      <p style={styles.text}>Please sign in to access the protected dashboard page.</p>
      <button style={styles.button} onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    maxWidth: '400px',
    margin: '4rem auto',
    padding: '2rem',
    textAlign: 'center',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  text: {
    color: '#6b7280',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    border: 'none',
    padding: '0.6rem 1.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 500,
  },
}