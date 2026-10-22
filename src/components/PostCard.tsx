import React from 'react'
import { Link } from 'react-router-dom'
import type { Post } from '../types'

type PostCardProps = {
  post: Post
  onLike: (id: number) => void
}

export const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to={`/posts/${post.id}`}>Read More</Link>
        <button onClick={() => onLike(post.id)}>
          ❤️ Like ({post.likes})
        </button>
      </div>
    </div>
  )
}