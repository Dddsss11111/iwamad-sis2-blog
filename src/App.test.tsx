import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login'


describe('Blog Application Tests', () => {
  it('renders Home page correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    expect(screen.getByText(/Welcome to My Blog/i)).toBeTruthy()
  })

  it('renders NotFound page on unknown route', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    )
    expect(screen.getByText(/404 - Page Not Found/i)).toBeTruthy()
  })

  it('handles sign in button click', async () => {
    const handleLogin = vi.fn()
    render(
      <MemoryRouter>
        <Login onLogin={handleLogin} />
      </MemoryRouter>
    )
    const button = screen.getByRole('button', { name: /Sign In/i })
    await userEvent.click(button)
    expect(handleLogin).toHaveBeenCalledTimes(1)
  })
})