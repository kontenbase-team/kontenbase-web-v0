import type { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, useActionData, json } from 'remix'

import { PricingHero, PricingTable } from '~/contents'
import { createMeta, ReactGA } from '~/utils'

/**
 * Meta
 */
export const meta: MetaFunction = () => {
  return createMeta({
    title: 'Kontenbase - Pricing',
    description: 'Pricing plans of Kontenbase.',
    route: 'pricing',
  })
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
  ReactGA.send({ hitType: 'pageview', page: '/pricing' })

  const loaderData = useLoaderData<PricingData>()
  const actionData = useActionData()

  return (
    <>
      <PricingHero />
      <PricingTable />
    </>
  )
}
