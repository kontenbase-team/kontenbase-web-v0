import { json, useLoaderData } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { createMeta, ReactGA } from '~/utils'

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
export const loader: LoaderFunction = () => {
  const data = {}

  return json(data)
}

/**
 * Pricing Page
 */
export default function Pricing() {
  ReactGA.send({ hitType: 'pageview', page: '/blog' })

  const data = useLoaderData()

  return (
    <>
      <h1>Blog</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
