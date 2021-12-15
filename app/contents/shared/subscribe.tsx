import { Form } from 'remix'

import { styled } from '~/stitches'
import { Content, Heading, Paragraph, Input } from '~/components'

const SubscribeSectionContainer = styled('section', {
  padding: '4rem 0',
  background: '$background2',
  display: 'flex',
  justifyContent: 'center',
})

const SubscribeBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  maxWidth: '500px',
  width: '100%',
  '*': {
    margin: 0,
  },
})

export const SubscribeSection = () => {
  return (
    <SubscribeSectionContainer>
      <Content layout="center">
        <SubscribeBox>
          <Heading as="h2">We are launching soon!</Heading>
          <Paragraph>Join our early adopter program as tester</Paragraph>
          <SubscribeBoxForm />
        </SubscribeBox>
      </Content>
    </SubscribeSectionContainer>
  )
}

const SubscribeForm = styled(Form, {
  display: 'flex',
  width: '100%',
})

export const SubscribeBoxForm = () => {
  return (
    <SubscribeForm>
      <Input
        type="email"
        placeholder="yourname@email.com"
        variant="text"
        size="wide"
        border="radius-left"
      />
      <Input
        type="submit"
        value="Subscribe"
        variant="primary"
        size="fixed"
        border="radius-right"
      />
    </SubscribeForm>
  )
}
