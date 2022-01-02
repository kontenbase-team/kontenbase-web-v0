import { Form } from 'remix'

import { styled } from '~/stitches'
import { Content, Heading, P, Input, Alert } from '~/components'

const SubscribeSectionContainer = styled('section', {
  position: 'relative',
  background: '$background2',
  padding: '2.5rem 0',
  '@tablet': { padding: '2.5rem 0' },
  '@desktop': { padding: '3.5rem 0' },
})

const SubscribeAndImage = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

const SubscribeBox = styled('div', {
  zIndex: '$1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  maxWidth: '720px',
  width: '100%',
  '*': { margin: 0 },
})

const RocketImage = styled('img', {
  position: 'absolute',
  opacity: '0.1',
  right: '0.25rem',
  top: '-2rem',
  height: '200px',
  '@tablet': {
    opacity: '0.2',
    height: '220px',
  },
  '@desktop': {
    height: '260px',
  },
  '@tv': {
    height: '290px',
    opacity: '1',
    top: '-3rem',
  },
})

interface SubscribeSectionProps {
  transition: any
  loaderData: any
  actionData: any
}

export const SubscribeSection = (props: SubscribeSectionProps) => {
  return (
    <SubscribeSectionContainer>
      <Content layout="center-horizontal">
        <SubscribeAndImage>
          <SubscribeBox>
            <Heading as="h2">We are launching soon!</Heading>
            <P>Join our early adopter program as alpha tester</P>
            <SubscribeBoxForm transition={props.transition} />
            {props.actionData?.error && (
              <Alert variant="error">{props.actionData?.message}</Alert>
            )}
            {props.actionData?.subscriber?.email && (
              <Alert variant="success">{props.actionData?.message}</Alert>
            )}
          </SubscribeBox>
        </SubscribeAndImage>
      </Content>
      <RocketImage src="/images/rocket.svg" alt="Rocket illustration" />
    </SubscribeSectionContainer>
  )
}

const SubscribeForm = styled(Form, {
  display: 'flex',
  width: '100%',
})

export const SubscribeBoxForm = (props: { transition: any }) => {
  return (
    <SubscribeForm method="post" action="/action/subscribe">
      <Input
        name="name"
        type="text"
        size="wide"
        variant="text"
        border="radius-left"
        placeholder="Your Full Name"
      />
      <Input
        name="email"
        type="email"
        size="wide"
        variant="text"
        placeholder="name@email.com"
      />
      <Input
        type="submit"
        size="fixed"
        variant="submit"
        border="radius-right"
        disabled={props.transition?.state !== 'idle'}
        value={
          props.transition?.state !== 'idle' ? 'Subscribing...' : 'Subscribe'
        }
      />
    </SubscribeForm>
  )
}
