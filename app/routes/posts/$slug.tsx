import { Link, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import invariant from 'tiny-invariant'
import parse from 'html-react-parser'

import { styled } from '~/stitches'
import { Heading } from '~/components'
import { getPost } from '~/post'

const Breadcrumb = styled('div', { padding: '1rem 0' })

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug')
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData()

  return (
    <div>
      <Breadcrumb>
        <Link to="/posts">
          <span>&laquo; All blog posts</span>
        </Link>
      </Breadcrumb>

      <article>
        <header>
          <Heading as="h1">{post.title}</Heading>
        </header>

        <section>
          <div>{parse(post.html)}</div>
        </section>
      </article>
    </div>
  )
}
