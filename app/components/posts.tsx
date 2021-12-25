import { Link } from 'remix'

import { styled } from '~/stitches'
import { Heading } from '~/components'
import type { Post } from '~/post'

interface PostsProps {
  posts: Post[]
}

const PostsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  gap: '2rem',
})

const PostSection = styled('section', {
  padding: '1rem',
  minHeight: '100px',
  borderRadius: '0.5rem',
  transition: 'filter 0.2s ease-in-out',
  background: 'linear-gradient(135deg, $blue8, $cyan10 50%)',
  '*': {
    color: '$white',
  },
  '&:hover': {
    filter: 'brightness(0.9)',
  },
})

export const PostsCollection = ({ posts }: PostsProps) => {
  return (
    <PostsContainer>
      {posts.map((post) => (
        <Link to={post.slug}>
          <PostSection key={post.slug}>
            <Heading as="h4">{post.title}</Heading>
          </PostSection>
        </Link>
      ))}
    </PostsContainer>
  )
}
