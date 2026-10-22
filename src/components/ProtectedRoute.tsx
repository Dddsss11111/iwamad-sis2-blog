import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type ProtectedRouteProps = {
  isAuthenticated: boolean
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}