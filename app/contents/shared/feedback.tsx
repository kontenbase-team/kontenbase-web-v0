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

interface FeedbackProps {}

interface FeedbackDialogProps {}

const FeedbackContainer = styled('div', {
  zIndex: '$sticky',
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
    <AlertDialogRoot>
      <AlertDialogTrigger asChild>
        <FeedbackButton mode="right">
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
            feedback. There you can either check existing feedback/issue or{' '}
            <Anchor href="https://github.com/kontenbase/feedback/issues/new">
              create a new one.
            </Anchor>
          </P>
          <P>
            <Anchor href="https://github.com/kontenbase/feedback/issues">
              https://github.com/kontenbase/feedback/issues
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
