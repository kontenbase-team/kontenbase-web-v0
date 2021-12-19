import { Form } from 'remix'

import { styled } from '~/stitches'
import { Content, Heading, Paragraph, Input, Alert } from '~/components'

const SubscribeSectionContainer = styled('section', {
  background: '$background2',
  padding: '2.5rem 0',
  '@tablet': { padding: '2.5rem 0' },
  '@desktop': { padding: '3.5rem 0' },
})

const SubscribeAndImage = styled('div', {
  position: 'relative',
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
  maxWidth: '600px',
  width: '100%',
  '*': { margin: 0 },
})

const RocketImage = styled('img', {
  position: 'absolute',
  height: '250px',
  opacity: '0.1',
  right: '0',
  bottom: '-2rem',
  '@tablet': { opacity: '0.2', bottom: '0' },
  '@desktop': { height: '275px', bottom: '0' },
  '@tv': { height: '300px', opacity: '1', bottom: '-3rem' },
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
            <Paragraph>
              Join our early adopter program as alpha tester
            </Paragraph>
            <SubscribeBoxForm transition={props.transition} />
            {props.actionData?.error && (
              <Alert variant="error">{props.actionData?.message}</Alert>
            )}
            {props.actionData?.subscriber?.email && (
              <Alert variant="success">{props.actionData?.message}</Alert>
            )}
          </SubscribeBox>
          <RocketImage src="/images/rocket.svg" alt="Rocket illustration" />
        </SubscribeAndImage>
      </Content>
    </SubscribeSectionContainer>
  )
}

const SubscribeForm = styled(Form, {
  display: 'flex',
  width: '100%',
})

export const SubscribeBoxForm = (props: { transition: any }) => {
  return (
    <SubscribeForm method="post" action="/?index">
      <Input
        name="email"
        type="email"
        size="wide"
        variant="text"
        border="radius-left"
        placeholder="name@email.com"
      />
      <Input
        type="submit"
        size="fixed"
        variant="primary"
        border="radius-right"
        disabled={props.transition?.state !== 'idle'}
        value={
          props.transition?.state !== 'idle' ? 'Subscribing...' : 'Subscribe'
        }
      />
    </SubscribeForm>
  )
}
