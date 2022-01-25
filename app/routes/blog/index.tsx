import { gql } from '@urql/core'
import { json, useLoaderData } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { Content } from '~/components'
import { BlogArticles, BlogHero } from '~/contents'
import { BlogArticle } from '~/types'
import { hashnodeClient, createMeta, ReactGA } from '~/utils'

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
  const articles: BlogArticle[] = response.data.user.publication.posts

  return json(articles)
}

/**
 * Blog Page
 */
export default function Blog() {
  ReactGA.send({ hitType: 'pageview', page: '/blog' })

  const articles = useLoaderData<BlogArticle[]>()

  return (
    <>
      <BlogHero />
      <Content>
        <BlogArticles articles={articles} />
      </Content>
    </>
  )
}
