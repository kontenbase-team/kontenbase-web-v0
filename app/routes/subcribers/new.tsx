import type { LoaderFunction, ActionFunction } from 'remix'
import { json } from 'remix'

type IndexData = {}

export let loader: LoaderFunction = () => {
  console.log('BUTTONDOWN_API_KEY', process.env.BUTTONDOWN_API_KEY)

  let data: IndexData = {}

  return json(data)
}

const subscribeEmail = (formData: any) => {
  console.log({ formData })

  const subscriber = formData

  return subscriber
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const subscriber = await subscribeEmail(formData)

  console.log({ subscriber })

  return json({
    message: 'Successfully subscribed!',
    subscriber,
  })
}
