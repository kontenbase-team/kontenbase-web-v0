import { gql } from '@urql/core'
import { json, useLoaderData } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { BlogArticles, BlogHero } from '~/contents'
import { hashnodeClient, createMeta, ReactGA } from '~/utils'
import { Content } from '~/components'

/**
 * Meta
 */
export const meta: MetaFunction = () =>
  createMeta({
    title: 'Kontenbase - Blog',
    description: 'Blog articles and posts by Kontenbase.',
    route: 'blog',
  })

/**
 * Loader
 */
export const loader: LoaderFunction = async () => {
  const BlogPostsQuery = gql`
    query {
      user(username: "kontenbase") {
        publication {
          posts(page: 0) {
            cuid
            slug
            title
            brief
            coverImage
            dateAdded
          }
        }
      }
    }
  `
  const response = await hashnodeClient.query(BlogPostsQuery).toPromise()

  return json({
    articles: response.data.user.publication.posts,
  })
}

/**
 * Blog Page
 */
export default function Blog() {
  ReactGA.send({ hitType: 'pageview', page: '/blog' })

  const data = useLoaderData()

  return (
    <>
      <BlogHero />
      <Content>
        <BlogArticles articles={data.articles} />
      </Content>
    </>
  )
}
