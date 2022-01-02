import type { MetaFunction, LoaderFunction, ActionFunction } from 'remix'
import { useLoaderData, useActionData, useTransition, json } from 'remix'
import axios from 'axios'

import { SubscribeSection } from '~/contents'
import { ReactGA } from '~/utils'

export const meta: MetaFunction = () => {
  return {
    title: 'Subscribe to Kontenbase Newsletter',
    description: 'Subscribe to Kontenbase Newsletter.',
  }
}

/**
 * Subscribe Page
 */
export default function Subscribe() {
  ReactGA.send({ hitType: 'pageview', page: '/subscribe' })

  const transition = useTransition()
  const actionData = useActionData()

  return (
    <>
      <SubscribeSection transition={transition} actionData={actionData} />
    </>
  )
}
