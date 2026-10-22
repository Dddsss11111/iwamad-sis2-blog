import type { Post } from '../types'

export const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn why combining React with TypeScript improves developer experience.',
    content: 'TypeScript adds static typing to JavaScript, helping catch bugs early during development while building modern React applications.',
    likes: 0,
  },
  {
    id: 2,
    title: 'Routing in Single Page Applications',
    excerpt: 'How React Router handles navigation seamlessly without full page reloads.',
    content: 'React Router enables client-side routing, keeping UI in sync with the URL and rendering components dynamically.',
    likes: 0,
  },
  {
    id: 3,
    title: 'State Management Basics',
    excerpt: 'Understanding useState and local component states effectively.',
    content: 'Local state allows React components to remember information across renders and react to user interactions instantly.',
    likes: 0,
  },
  {
    id: 4,
    title: 'Writing Tests with Vitest',
    excerpt: 'Ensure your application works correctly with robust unit tests.',
    content: 'Vitest and React Testing Library provide a powerful environment to test component rendering and user interactions.',
    likes: 0,
  },
  {
    id: 5,
    title: 'Deploying to GitHub Pages',
    excerpt: 'Publishing your React application live for the world to see.',
    content: 'With custom Vite build outputs and GitHub Actions or main/docs publishing, hosting static React apps is straightforward.',
    likes: 0,
  },
]