import type { MetaFunction, LoaderFunction, ActionFunction } from 'remix'
import { useLoaderData, useActionData, useTransition, json } from 'remix'
import axios from 'axios'

import { HomeHero, SubscribeSection } from '~/contents'
import { envServer } from '~/utils'

/**
 * Meta
 */
export const meta: MetaFunction = () => {
  return {
    title: 'Kontenbase - No Code Backend API, Fast and Easy!',
    description:
      'Kontenbase allows you to easily create backend API, auth, and storage in less than 1 minute without coding.',
  }
}

/**
 * Loader
 */

type IndexData = {}

export const loader: LoaderFunction = () => {
  const data: IndexData = {}

  return json(data)
}

/**
 * Action
 */
export const action: ActionFunction = async ({ request }) => {
  // Action external API request
  const subscribeEmail = async (email: string) => {
    try {
      const response = await axios.post(
        'https://api.buttondown.email/v1/subscribers',
        { email: email, notes: 'early' },
        { headers: { Authorization: `Token ${envServer.BUTTONDOWN_API_KEY}` } }
      )
      console.log(response.data)
      return response.data
    } catch (error: any) {
      console.error(error.response.status, error.response.data)
      return error.response.data[0]
    }
  }

  // Action internal handler
  try {
    const formData = await request.formData()
    const email = String(formData.get('email'))
    if (email) {
      const data = await subscribeEmail(email)
      if (data?.email) {
        return json({
          message: `${data.email} is successfully subscribed!`,
          subscriber: data,
        })
      } else {
        return json({ error: true, message: data })
      }
    } else {
      return json({ error: true, message: 'Sorry, please provide an email' })
    }
  } catch (error) {
    return json({ error: true, message: 'Sorry, failed for unknown reason' })
  }
}

/**
 * Home Page
 */
export default function Index() {
  const transition = useTransition()
  const loaderData = useLoaderData<IndexData>()
  const actionData = useActionData()

  return (
    <>
      <HomeHero />
      <SubscribeSection
        transition={transition}
        loaderData={loaderData}
        actionData={actionData}
      />
    </>
  )
}
