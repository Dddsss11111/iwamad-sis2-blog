import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Home } from './pages/Home'
import { PostsList } from './pages/PostsList'
import { PostDetail } from './pages/PostDetail'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { ProtectedPage } from './pages/ProtectedPage'
import { NotFound } from './pages/NotFound'
import { initialPosts } from './data/posts'
import type { Post } from './types'

export function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const handleLike = (id: number) => {
    setPosts(prev =>
      prev.map(post => (post.id === id ? { ...post, likes: post.likes + 1 } : post))
    )
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout isAuthenticated={isAuthenticated} />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<PostsList posts={posts} onLike={handleLike} />} />
          <Route path="posts/:id" element={<PostDetail posts={posts} onLike={handleLike} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="dashboard" element={<ProtectedPage onLogout={() => setIsAuthenticated(false)} />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App