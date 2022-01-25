import { gql } from '@urql/core'
import { json, useLoaderData } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { hashnodeClient, createMeta, ReactGA } from '~/utils'
import { BlogHero } from '~/contents'

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
    posts: response.data.user.publication.posts,
  })
}

/**
 * Pricing Page
 */
export default function Pricing() {
  ReactGA.send({ hitType: 'pageview', page: '/blog' })

  const data = useLoaderData()

  return (
    <>
      <BlogHero />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
