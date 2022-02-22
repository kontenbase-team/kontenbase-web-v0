import { FunctionComponent } from 'react'

import { Content, Heading, P } from '~/components'

export const ContactContent: FunctionComponent = () => (
  <Content layout="center-vertical">
    <article>
      <section>
        <Heading as="h3">Support</Heading>
        <P>
          Thank you for being interested in Kontenbase! If you have any
          feedback, issue, or problem on learning and using Kontenbase, you can
          reach to us and the community through various channels:
        </P>
        <ul>
          <li>GitHub</li>
          <li>Discord</li>
          <li>Twitter</li>
        </ul>
      </section>

      <section>
        <Heading as="h3">Kontenbase Team</Heading>
        <P>
          Kontenbase team is a collaboration between internal developers and
          contributors around the world.
        </P>
        <ul>
          <li>Ega Radiegtya</li>
          <li>Egi Tri Aginta Ginting</li>
          <li>M Haidar Hanif</li>
        </ul>
      </section>
    </article>
  </Content>
)
