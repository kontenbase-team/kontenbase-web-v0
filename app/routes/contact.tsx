import type { MetaFunction } from 'remix'
import { ContactHero, ContactContent } from '~/contents'
import { ReactGA } from '~/utils'

export const meta: MetaFunction = () => ({
  title: 'Kontenbase - Contact',
  description: 'Contact support and team information.',
})

/**
 * Contact Page
 */
export default function Index() {
  ReactGA.send({ hitType: 'pageview', page: '/contact' })

  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  )
}
