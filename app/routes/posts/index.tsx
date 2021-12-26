import { useLoaderData } from 'remix'

import { Heading, PostsCollection } from '~/components'
import { getPosts } from '~/post'
import type { Posts } from '~/post'

export const loader = () => {
  return getPosts()
}

export default function Posts() {
  const posts = useLoaderData<Posts>()

  return (
    <div>
      <Heading as="h1">My Blog Posts</Heading>

      <PostsCollection posts={posts} />
    </div>
  )
}
