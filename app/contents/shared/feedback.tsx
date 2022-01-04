import { FunctionComponent } from 'react'

import { AnchorButton, Button, Icon, Span } from '~/components'
import { styled } from '~/stitches'

interface FeedbackProps {}

interface FeedbackDialogProps {}

const FeedbackContainer = styled('div', {
  zIndex: '$modal',
  top: '50%',
  right: 0,
  position: 'fixed',
  transform: 'rotate(-90deg)',
  width: '35px',
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
  <FeedbackContainer>
    <FeedbackAnchorButton
      mode="right"
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
  <FeedbackContainer>
    <FeedbackButton mode="right">
      <Span css={{ fontSize: '$3' }}>
        <Icon name="feedback" />
      </Span>
      <Span css={{ pl: '$2' }}>Feedback</Span>
    </FeedbackButton>
  </FeedbackContainer>
)
