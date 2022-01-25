/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import axios from 'axios'
import { Form, json } from 'remix'

import type { ActionFunction } from 'remix'
import { Content, Heading, P, Input, Alert } from '~/components'
import { styled } from '~/stitches'

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

const SubscribeForm = styled(Form, {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  '@tablet': {
    flexDirection: 'row',
    gap: '$0',
  },
})

interface SubscribeSectionProps {
  transition?: any
  actionData?: any
}

export const SubscribeSection = (props: SubscribeSectionProps) => (
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

export const SubscribeBoxForm = ({ transition }: { transition: any }) => {
  const subscribeText =
    transition.state === 'submitting' ? 'Subscribing...' : 'Subscribe'

  return (
    <SubscribeForm method="post">
      <Input
        name="name"
        type="text"
        size="wide"
        variant="text"
        border="radius-left"
        placeholder="Your Full Name"
        required
      />
      <Input
        name="email"
        type="email"
        size="wide"
        variant="text"
        border="radius-mobile"
        placeholder="name@email.com"
        required
      />
      <Input
        type="submit"
        size="fixed"
        variant="submit"
        border="radius-right"
        disabled={transition.state === 'submitting'}
        value={subscribeText}
      />
    </SubscribeForm>
  )
}

export const subscribeNew = async ({
  email,
  name,
}: {
  email: string
  name: string
}) => {
  try {
    const payload = {
      email,
      metadata: { name },
      notes: 'early',
      tags: ['early'],
    }

    const response = await axios.post(
      'https://api.buttondown.email/v1/subscribers',
      payload,
      { headers: { Authorization: `Token ${ENV.BUTTONDOWN_API_KEY}` } }
    )

    return response.data
  } catch (error: any) {
    console.error(error.response.status, error.response.data)
    return error.response.data[0]
  }
}

export const subscribeAction: ActionFunction = async ({ request }) => {
  try {
    const form = await request.formData()
    const email = form.get('email')?.toString()
    const name = form.get('name')?.toString()

    if (email && name) {
      const data = await subscribeNew({ email, name })

      if (data?.email) {
        return json({
          message: `${data?.email} is subscribed! Check the inbox to confirm`,
          subscriber: data,
        })
      }
      return json({ error: true, message: data })
    }
    return json({
      error: true,
      message: 'Sorry, please provide name and email',
    })
  } catch (error) {
    return json({ error: true, message: 'Sorry, failed for unknown reason' })
  }
}
