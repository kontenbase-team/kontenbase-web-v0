import { useActionData, useTransition } from 'remix'
import type { MetaFunction, ActionFunction } from 'remix'

import { subscribeAction, SubscribeSection } from '~/contents'
import { ReactGA } from '~/utils'

export const meta: MetaFunction = () => {
  return {
    title: 'Subscribe to Kontenbase Newsletter',
    description: 'Subscribe to Kontenbase Newsletter.',
  }
}

export const action: ActionFunction = subscribeAction

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
