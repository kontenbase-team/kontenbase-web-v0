import { useActionData, useTransition } from 'remix'

import type { MetaFunction, ActionFunction } from 'remix'
import {
  HomeHero,
  SubscribeSection,
  ExplainerSteps,
  subscribeAction,
} from '~/contents'
import { ReactGA } from '~/utils'

export const meta: MetaFunction = () => ({
  title: 'Kontenbase - No Code Backend API, Fast and Easy!',
  description:
    'Kontenbase allows you to easily create backend API, auth, and storage in less than 1 minute without coding.',
})

export const action: ActionFunction = subscribeAction

/**
 * Home Page
 */
export default function Index() {
  ReactGA.send({ hitType: 'pageview', page: '/' })

  const transition = useTransition()
  const actionData = useActionData()

  return (
    <>
      <HomeHero />
      <SubscribeSection transition={transition} actionData={actionData} />
      <ExplainerSteps />
      <SubscribeSection transition={transition} actionData={actionData} />
    </>
  )
}
