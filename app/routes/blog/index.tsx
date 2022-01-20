import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = async () =>
  redirect('https://a.kontenbase.com/blog')
