import { createClient } from '@urql/core'

export const hashnodeClient = createClient({
  url: 'https://api.hashnode.com',
})
