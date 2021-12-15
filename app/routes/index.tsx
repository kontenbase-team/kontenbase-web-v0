import type { MetaFunction, LoaderFunction, ActionFunction } from 'remix'
import { useLoaderData, useTransition, json } from 'remix'
import axios from 'axios'

import { HomeHero, SubscribeSection } from '~/contents'
import { envServer } from '~/utils'

export let meta: MetaFunction = () => {
  return {
    title: 'Kontenbase - No Code Backend API, Fast and Easy!',
    description:
      'Kontenbase allows you to easily create backend API, auth, and storage in less than 1 minute without coding.',
  }
}

type IndexData = {}

export let loader: LoaderFunction = () => {
  // console.info('BUTTONDOWN_API_KEY', process.env.BUTTONDOWN_API_KEY)

  let data: IndexData = {}

  return json(data)
}

export const action: ActionFunction = async ({ request }) => {
  // Action external API request
  const subscribeEmail = async (formData: any) => {
    try {
      const email = formData.get('email')
      console.log({ email })

      const response = await axios.post(
        'https://api.buttondown.email/v1/subscribers',
        { email: email, notes: 'early' },
        { headers: { Authorization: `Token ${envServer.BUTTONDOWN_API_KEY}` } }
      )
      const subscriber = response.data
      return subscriber
    } catch (error: any) {
      if (error.response) {
        console.error(error.response.data)
        console.error(error.response.status)
        const errorMessage = error.response.data[0]
        return errorMessage
      } else if (error.request) {
        console.error(error.request)
      } else {
        console.error('Error', error.message)
      }
    }
  }

  // Action internal handler
  try {
    const formData = await request.formData()
    const subscriber = await subscribeEmail(formData)

    console.log({ subscriber })

    return json({
      message: 'Successfully subscribed!',
      subscriber,
    })
  } catch (error) {
    return json({
      message: 'Failed',
      error,
    })
  }
}

export default function Index() {
  const data = useLoaderData<IndexData>()
  const transition = useTransition()

  return (
    <>
      <HomeHero />
      <SubscribeSection transition={transition} />
      {/* <pre>{JSON.stringify(transition, null, 2)}</pre> */}
    </>
  )
}
