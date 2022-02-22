import { FunctionComponent } from 'react'

import { Heading, Hero } from '~/components'

export const ContactHero: FunctionComponent = () => (
  <Hero>
    <Heading as="h1">Contact Us</Heading>
    <Heading as="h2" color="solid">
      Support links and team
    </Heading>
  </Hero>
)
