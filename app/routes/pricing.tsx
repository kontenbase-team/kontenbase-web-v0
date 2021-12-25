import type { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, useActionData, json } from 'remix'

import { HomeHero } from '~/contents'

/**
 * Meta
 */
export const meta: MetaFunction = () => {
  return {
    title: 'Kontenbase - Pricing',
    description: 'Pricing plans of Kontenbase.',
  }
}

/**
 * Loader
 */
type PricingData = {}

export const loader: LoaderFunction = () => {
  const data: PricingData = {}

  return json(data)
}

/**
 * Pricing Page
 */
export default function Pricing() {
  const loaderData = useLoaderData<PricingData>()
  const actionData = useActionData()

  return (
    <>
      <h1>Pricing</h1>
    </>
  )
}
