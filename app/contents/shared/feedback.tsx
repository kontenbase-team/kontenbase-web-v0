import { FunctionComponent } from 'react'

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
  Anchor,
  AnchorButton,
  Button,
  Flex,
  Icon,
  P,
  Span,
} from '~/components'
import { styled } from '~/stitches'

interface FeedbackProps {
  mode: 'left' | 'right'
}

interface FeedbackDialogProps {
  mode: 'left' | 'right'
}

const FeedbackContainer = styled('div', {
  zIndex: '$sticky',
  width: '35px',
  top: '80%',
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

export const Feedback: FunctionComponent<FeedbackProps> = ({ mode }) => (
  <FeedbackContainer mode={mode}>
    <FeedbackAnchorButton
      mode={mode}
      href="https://github.com/kontenbase/feedback/issues"
    >
      <Span css={{ fontSize: '$3' }}>
        <Icon name="feedback" />
      </Span>
      <Span css={{ pl: '$2' }}>Feedback</Span>
    </FeedbackAnchorButton>
  </FeedbackContainer>
)

export const FeedbackDialog: FunctionComponent<FeedbackDialogProps> = ({
  mode,
}) => (
  <FeedbackContainer mode={mode}>
    <AlertDialogRoot>
      <AlertDialogTrigger asChild>
        <FeedbackButton mode={mode}>
          <Span css={{ fontSize: '$3' }}>
            <Icon name="feedback" />
          </Span>
          <Span css={{ pl: '$2' }}>Feedback</Span>
        </FeedbackButton>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogTitle>Submit feedback</AlertDialogTitle>
        <AlertDialogDescription>
          <P>
            You will be redirected to GitHub Issues in order to submit your
            feedback. There you can either check{' '}
            <Anchor href="https://github.com/kontenbase/feedback/issues">
              existing feedback/issue
            </Anchor>{' '}
            or{' '}
            <Anchor href="https://github.com/kontenbase/feedback/issues/new">
              create a new one.
            </Anchor>
          </P>
        </AlertDialogDescription>

        <Flex css={{ justifyContent: 'flex-end' }}>
          <AlertDialogCancel asChild>
            <Button variant="cancel" css={{ marginRight: '$3' }}>
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <AnchorButton href="https://github.com/kontenbase/feedback/issues">
              OK
            </AnchorButton>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialogRoot>
  </FeedbackContainer>
)
