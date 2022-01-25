import { gql } from '@urql/core'
import parse from 'html-react-parser'
import { marked } from 'marked'
import { json, useLoaderData } from 'remix'

import type { LoaderFunction } from 'remix'
import { Content, Heading } from '~/components'
import { styled } from '~/stitches'
import { BlogArticle } from '~/types'
import { getDate, hashnodeClient } from '~/utils'

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

const ArticleDate = styled('time', {
  textDecoration: 'underline',
})

const ArticleContent = styled('div', {
  mt: '$5',
  fontSize: '$5',
  a: {
    color: '$brand9',
    '&:hover': { color: '$brand11' },
  },
})

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
        contentMarkdown
      }
    }
  `
  const response = await hashnodeClient
    .query(BlogPostSlugQuery, { slug: params.slug })
    .toPromise()

  const article: BlogArticle = response.data.post

  return json({
    ...article,
    html: marked.parse(String(article?.contentMarkdown)),
  })
}

/**
 * Blog Article Page
 */

export default function BlogArticleSlug() {
  // ReactGA.send({ hitType: 'pageview', page: '/blog' })

  const article = useLoaderData<BlogArticle>()

  return (
    <Content>
      <ArticleContainer>
        <Article>
          <ArticleCoverImage src={article.coverImage} alt={article.title} />
          <Heading as="h1">{article.title}</Heading>
          <ArticleDate dateTime={article.dateAdded}>
            {getDate(article.dateAdded)}
          </ArticleDate>
          <ArticleContent>{parse(String(article?.html))}</ArticleContent>
        </Article>
      </ArticleContainer>
    </Content>
  )
}
