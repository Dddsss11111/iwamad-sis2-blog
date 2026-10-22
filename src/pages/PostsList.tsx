import React from 'react'
import { PostCard } from '../components/PostCard'
import type { Post } from '../types'

type PostsListProps = {
  posts: Post[]
  onLike: (id: number) => void
}

export const PostsList: React.FC<PostsListProps> = ({ posts, onLike }) => {
  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.map(post => (
        <PostCard key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  )
}