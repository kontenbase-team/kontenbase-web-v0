import { LoaderFunction, redirect } from 'remix'

import { Heading } from '~/components'

export const loader: LoaderFunction = async () =>
  redirect('https://blog.kontenbase.com')

export default function Posts() {
  return (
    <div>
      <Heading as="h1">Kontenbase Blog</Heading>

      {/* <PostsCollection posts={posts} /> */}
    </div>
  )
}
