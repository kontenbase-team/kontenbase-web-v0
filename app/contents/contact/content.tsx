import { FunctionComponent } from 'react'

import {
  Anchor,
  AnchorButton,
  Avatar,
  ButtonGroup,
  Content,
  Heading,
  Link,
  P,
  Section,
} from '~/components'
import { teamData } from '~/data'
import { styled } from '~/stitches'

const Team = styled('div', {
  width: '100%',
  mb: '2rem',
})

const Members = styled('div', {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
})

const Member = styled('div', {
  padding: '1rem',
  background: '$background3',
  borderRadius: '0.5rem',
  width: '100%',
  '@tablet': {
    maxWidth: '300px',
  },
})

export const ContactContent: FunctionComponent = () => (
  <Content layout="center-vertical" css={{ gap: '3rem' }}>
    <Section>
      <Heading as="h3">Support</Heading>
      <P>
        Thank you for being interested in Kontenbase! If you have any feedback,
        issue, or problem on learning and using Kontenbase, you can reach to us
        and the community through our main support channels:
      </P>
      <ButtonGroup>
        <AnchorButton href="https://github.com/kontenbase/feedback">
          GitHub
        </AnchorButton>
        <AnchorButton href="https://a.kontenbase.com/discord-invite">
          Discord
        </AnchorButton>
        <AnchorButton href="https://twitter.com/kontenbase">
          Twitter
        </AnchorButton>
      </ButtonGroup>
    </Section>

    <Section>
      <Heading as="h3">Kontenbase Team</Heading>
      <P>
        Kontenbase team is a collaboration between internal developers and
        contributors around the world. Want to join?{' '}
        <Link to="/jobs">Apply here</Link>.
      </P>
    </Section>

    <Section>
      {teamData.map((part) => (
        <Team key={part.type}>
          <Heading as="h4">{part.type}</Heading>
          <Members>
            {part.members.map((member) => (
              <Member>
                <Avatar src={member?.avatarUrl} name={member?.name} />
                <Heading as="h5" css={{ mt: '0.5rem' }}>
                  {member.name}
                </Heading>
                <Heading as="h6" css={{ fontWeight: 'normal' }}>
                  {member.role}
                </Heading>
              </Member>
            ))}
          </Members>
        </Team>
      ))}
    </Section>
  </Content>
)
