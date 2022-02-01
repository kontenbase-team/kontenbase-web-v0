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

interface FeedbackDialogProps {
  mode: 'left' | 'right'
}

const FeedbackContainer = styled('div', {
  zIndex: '$sticky',
  bottom: '10%',
  position: 'fixed',
  transform: 'rotate(-90deg)',
  width: '25px',
  '@tablet': { width: '30px' },
  '@desktop': { width: '35px' },
  variants: {
    mode: {
      left: { left: 0 },
      right: { right: 0 },
    },
  },
})

const FeedbackButton = styled(Button, {
  boxShadow: '0px 0 20px 5px $colors$redA6',
  width: '100px',
  '@tablet': { width: '110px' },
  '@desktop': { width: '120px' },
})

const FeedbackText = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '$1',
  '@tablet': { fontSize: '$2' },
  '@desktop': { fontSize: '$3' },
})

export const FeedbackDialog: FunctionComponent<FeedbackDialogProps> = ({
  mode,
}) => (
  <FeedbackContainer mode={mode}>
    <AlertDialogRoot>
      <AlertDialogTrigger asChild>
        <FeedbackButton mode={mode}>
          <FeedbackText>
            <span>
              <Icon name="feedback" />
            </span>
            <Span css={{ pl: '$2' }}>Feedback</Span>
          </FeedbackText>
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
            <Anchor href="https://github.com/kontenbase/feedback/issues/new/choose">
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
