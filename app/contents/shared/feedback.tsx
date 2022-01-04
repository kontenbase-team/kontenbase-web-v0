import { FunctionComponent } from 'react'

import { AnchorButton } from '~/components'
import { styled } from '~/stitches'

interface FeedbackProps {}

const FeedbackContainer = styled('div', {
  zIndex: '$modal',
  top: '50%',
  right: 0,
  display: 'flex',
  position: 'fixed',
  transform: 'translateY(-50%)',
  width: '4.2rem',
})

const FeedbackAnchorButton = styled(AnchorButton, {})

export const Feedback: FunctionComponent<FeedbackProps> = (props) => (
  <FeedbackContainer>
    <FeedbackAnchorButton
      rotate="right"
      href="https://github.com/kontenbase/feedback"
    >
      <span>Feedback</span>
    </FeedbackAnchorButton>
  </FeedbackContainer>
)

export default Feedback
