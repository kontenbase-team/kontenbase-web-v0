import parse from 'html-react-parser'
import { Link, useLoaderData } from 'remix'

import type { LoaderFunction } from 'remix'
import { Heading } from '~/components'
import { styled } from '~/stitches'

const Breadcrumb = styled('div', { padding: '1rem 0' })

export const loader: LoaderFunction = async ({ params }) => ({
  title: 'Title',
  params,
})

export default function PostSlug() {
  const article = useLoaderData()

  return (
    <div>
      <Breadcrumb>
        <Link to="/blog">
          <span>&laquo; All blog articles</span>
        </Link>
      </Breadcrumb>

      <article>
        <header>
          <Heading as="h1">{article.title}</Heading>
        </header>

        <section>
          <div>{parse(article.html)}</div>
        </section>
      </article>
    </div>
  )
}
