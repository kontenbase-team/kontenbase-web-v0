import { Form } from 'remix'

import { styled } from '~/stitches'
import { Content, Heading, Paragraph, Input, Alert } from '~/components'

const SubscribeSectionContainer = styled('section', {
  padding: '5rem 0',
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
  maxWidth: '600px',
  width: '100%',
  '*': { margin: 0 },
})

interface SubscribeSectionProps {
  transition: any
  loaderData: any
  actionData: any
}

export const SubscribeSection = (props: SubscribeSectionProps) => {
  return (
    <SubscribeSectionContainer>
      <Content layout="center">
        <SubscribeBox>
          <Heading as="h2">We are launching soon!</Heading>
          <Paragraph>Join our early adopter program as tester</Paragraph>
          <SubscribeBoxForm transition={props.transition} />
          {props.actionData?.error && (
            <Alert variant="error">{props.actionData?.message}</Alert>
          )}
          {props.actionData?.subscriber?.email && (
            <Alert variant="success">{props.actionData?.message}</Alert>
          )}
        </SubscribeBox>
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
