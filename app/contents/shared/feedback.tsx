import { FunctionComponent } from 'react'

import { AnchorButton, Button, Icon, Span } from '~/components'
import { styled } from '~/stitches'

interface FeedbackProps {}

interface FeedbackDialogProps {}

const FeedbackContainer = styled('div', {
  zIndex: '$modal',
  width: '35px',
  top: '50%',
  position: 'fixed',
  transform: 'rotate(-90deg)',
  variants: {
    mode: {
      left: { left: 0 },
      right: { right: 0 },
    },
  },
})

const FeedbackAnchorButton = styled(AnchorButton, {
  boxShadow: '0px 0 20px 5px $colors$redA6',
  width: '120px',
})

const FeedbackButton = styled(Button, {
  boxShadow: '0px 0 20px 5px $colors$redA6',
  width: '120px',
})

export const Feedback: FunctionComponent<FeedbackProps> = (props) => (
  <FeedbackContainer mode="left">
    <FeedbackAnchorButton
      mode="left"
      href="https://github.com/kontenbase/feedback/issues"
    >
      <Span css={{ fontSize: '$3' }}>
        <Icon name="feedback" />
      </Span>
      <Span css={{ pl: '$2' }}>Feedback</Span>
    </FeedbackAnchorButton>
  </FeedbackContainer>
)

export const FeedbackDialog: FunctionComponent<FeedbackDialogProps> = (
  props
) => (
  <FeedbackContainer mode="right">
    <FeedbackButton mode="right">
      <Span css={{ fontSize: '$3' }}>
        <Icon name="feedback" />
      </Span>
      <Span css={{ pl: '$2' }}>Feedback</Span>
    </FeedbackButton>
  </FeedbackContainer>
)
