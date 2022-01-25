import parse from 'html-react-parser'
import { json, Link, useLoaderData } from 'remix'

import type { LoaderFunction } from 'remix'
import { Content, Heading } from '~/components'
import { styled } from '~/stitches'
import { BlogArticle } from '~/types'

const Breadcrumb = styled('div', { padding: '1rem 0' })

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params)

  const article: BlogArticle = {}

  return json(article)
}

export default function BlogArticleSlug() {
  const article = useLoaderData()

  return (
    <Content>
      <Breadcrumb>
        <Link to="/blog">
          <span>&laquo; All blog articles</span>
        </Link>
      </Breadcrumb>

      <article>
        <header>
          <Heading as="h1">{article.title}</Heading>
        </header>
      </article>
    </Content>
  )
}
