import React from 'react'

export const Contact: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contact Me</h2>
      <p>If you have any questions or feedback, feel free to reach out!</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>Author:</strong> Bakytuly Doszhan</li>
        <li><strong>Email:</strong> doszhan@example.com</li>
        <li><strong>Location:</strong> Almaty, Kazakhstan</li>
      </ul>
    </div>
  )
}