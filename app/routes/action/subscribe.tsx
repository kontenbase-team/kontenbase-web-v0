import { json, redirect } from 'remix'
import type { ActionFunction } from 'remix'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const email = form.get('email')

  return json({
    success: true,
    email: email,
  })
}

export const loader = () => redirect('/', { status: 404 })

export default function ActionSubscribe() {
  return <div>This is the subscribe action</div>
}
