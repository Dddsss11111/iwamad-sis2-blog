import React from 'react'
import { useParams, Link } from 'react-router-dom'
import type { Post } from '../types'

type PostDetailProps = {
  posts: Post[]
  onLike: (id: number) => void
}

export const PostDetail: React.FC<PostDetailProps> = ({ posts, onLike }) => {
  const { id } = useParams<{ id: string }>()
  const postId = Number(id)
  const post = posts.find(p => p.id === postId)

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <p>The post with ID {id} does not exist.</p>
        <Link to="/posts">Back to Posts</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/posts">&larr; Back to Posts</Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={() => onLike(post.id)}>
        ❤️ Like ({post.likes})
      </button>
    </div>
  )
}