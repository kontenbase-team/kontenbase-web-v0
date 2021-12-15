import type { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, json, Link } from 'remix'

import { HomeHero } from '~/contents'

type IndexData = {}

export let loader: LoaderFunction = () => {
  let data: IndexData = {}

  return json(data)
}

export let meta: MetaFunction = () => {
  return {
    title: 'Kontenbase - No Code Backend API, Fast and Easy!',
    description:
      'Kontenbase allows you to easily create backend API, auth, and storage in less than 1 minute without coding.',
  }
}

export default function Index() {
  let data = useLoaderData<IndexData>()

  return (
    <div>
      <HomeHero />
    </div>
  )
}
