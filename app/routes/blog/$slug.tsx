import { gql } from '@urql/core'
import parse from 'html-react-parser'
import { marked } from 'marked'
import { json, useLoaderData } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { Content, Heading, Link } from '~/components'
import { styled } from '~/stitches'
import { BlogArticle } from '~/types'
import { createMeta, getDate, hashnodeClient, ReactGA } from '~/utils'

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

/**
 * Meta
 */
export const meta: MetaFunction = ({ data: article, params }) => {
  if (!article) {
    return createMeta({
      title: `No blog article found - Kontenbase Blog`,
      description: `Sorry, article not found`,
      route: `blog/${params.slug}`,
    })
  }
  return createMeta({
    title: `${article.title} - Kontenbase Blog`,
    description: `${article.brief}`,
    route: `blog/${article.slug}`,
  })
}

/**
 * Loader
 */
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

  if (!article) return json(null)
  return json({
    ...article,
    html: marked.parse(String(article?.contentMarkdown)),
  })
}

/**
 * Blog Article Page
 */

export default function BlogArticleSlug() {
  const article = useLoaderData<BlogArticle>()

  ReactGA.send({ hitType: 'pageview', page: `/blog/${article?.slug}` })

  return (
    <Content>
      {article ? (
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
      ) : (
        <ArticleContainer>
          <Article>
            <Heading as="h1">No blog article found</Heading>
            <Link to="/blog">Go back to Blog page</Link>
          </Article>
        </ArticleContainer>
      )}
    </Content>
  )
}
