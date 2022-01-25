import { gql } from '@urql/core'
import parse from 'html-react-parser'
import { json, useLoaderData } from 'remix'

import type { LoaderFunction } from 'remix'
import { Content, Heading } from '~/components'
import { styled } from '~/stitches'
import { BlogArticle } from '~/types'
import { getDate, hashnodeClient } from '~/utils'

export const loader: LoaderFunction = async ({ params }) => {
  const BlogPostSlugQuery = gql`
    query BlogPostSlug($slug: String!) {
      post(hostname: "kontenbase", slug: $slug) {
        cuid
        slug
        title
        brief
        coverImage
        dateAdded
        content
      }
    }
  `
  const response = await hashnodeClient
    .query(BlogPostSlugQuery, { slug: params.slug })
    .toPromise()

  const article: BlogArticle = response.data.post

  return json(article)
}

/**
 * Blog Article Page
 */

const ArticleContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

const Article = styled('article', {
  maxWidth: '720px',
})

const ArticleCoverImage = styled('img', {
  width: '100%',
  maxHeight: '300px',
  objectFit: 'cover',
  borderRadius: '$3',
})

const ArticleContent = styled('div', {
  mt: '$5',
  fontSize: '$5',
})

export default function BlogArticleSlug() {
  // ReactGA.send({ hitType: 'pageview', page: '/blog' })

  const article = useLoaderData<BlogArticle>()

  return (
    <Content>
      <ArticleContainer>
        <Article>
          <ArticleCoverImage src={article.coverImage} alt={article.title} />
          <Heading as="h1">{article.title}</Heading>
          <time dateTime={article.dateAdded}>{getDate(article.dateAdded)}</time>
          <ArticleContent>{parse(String(article?.content))}</ArticleContent>
        </Article>
      </ArticleContainer>
    </Content>
  )
}
