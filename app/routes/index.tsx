import type { MetaFunction, LoaderFunction, ActionFunction } from 'remix'
import { useLoaderData, json, redirect } from 'remix'

import { HomeHero, SubscribeSection } from '~/contents'

export let meta: MetaFunction = () => {
  return {
    title: 'Kontenbase - No Code Backend API, Fast and Easy!',
    description:
      'Kontenbase allows you to easily create backend API, auth, and storage in less than 1 minute without coding.',
  }
}

type IndexData = {}

export let loader: LoaderFunction = () => {
  let data: IndexData = {}
  return json(data)
}

const subscribeEmail = (formData: any) => {
  console.log({ formData })
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const subscriber = await subscribeEmail(formData)
  return json({
    message: 'Successfully subscribed!',
    subscriber,
  })
}

export default function Index() {
  let data = useLoaderData<IndexData>()

  return (
    <>
      <HomeHero />
      <SubscribeSection />
    </>
  )
}
