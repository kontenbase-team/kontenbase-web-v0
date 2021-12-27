import type { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, useActionData, json } from 'remix'

import { HomeHero } from '~/contents'
import { createMeta, ReactGA } from '~/utils'

/**
 * Meta
 */
export const meta: MetaFunction = () => {
  return createMeta({
    title: 'Kontenbase - About Us',
    description: 'Anything about Kontenbase.',
  })
}

/**
 * Loader
 */
type AboutData = {}

export const loader: LoaderFunction = () => {
  const data: AboutData = {}

  return json(data)
}

/**
 * About Page
 */
export default function About() {
  ReactGA.send({ hitType: 'pageview', page: '/about' })

  const loaderData = useLoaderData<AboutData>()
  const actionData = useActionData()

  return (
    <>
      <h1>About</h1>
    </>
  )
}
