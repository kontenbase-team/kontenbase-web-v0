import { styled, keyframes } from '~/stitches'
import { violet, blackA, red, mauve } from '@radix-ui/colors'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

import { Button } from '~/components'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  zIndex: '$overlay',
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

const StyledContent = styled(AlertDialogPrimitive.Content, {
  zIndex: '$modal',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
})

// @ts-ignore
function AlertDialogContentContainer({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  )
}

const AlertDialogTitleStyled = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 17,
  fontWeight: 500,
})

const AlertDialogDescriptionStyled = styled(AlertDialogPrimitive.Description, {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
})

// Exports
export const AlertDialogRoot = AlertDialogPrimitive.Root
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger
export const AlertDialogContent = AlertDialogContentContainer
export const AlertDialogTitle = AlertDialogTitleStyled
export const AlertDialogDescription = AlertDialogDescriptionStyled
export const AlertDialogAction = AlertDialogPrimitive.Action
export const AlertDialogCancel = AlertDialogPrimitive.Cancel

export const Flex = styled('div', { display: 'flex' })

export const AlertDialogDemo = () => (
  <AlertDialogRoot>
    <AlertDialogTrigger asChild>
      <Button>Feedback</Button>
    </AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogTitle>To submit feedback</AlertDialogTitle>
      <AlertDialogDescription>
        You will be redirected to GitHub Issues in order to submit your
        feedback.
      </AlertDialogDescription>
      <Flex css={{ justifyContent: 'flex-end' }}>
        <AlertDialogCancel asChild>
          <Button css={{ marginRight: 25 }}>Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button>OK</Button>
        </AlertDialogAction>
      </Flex>
    </AlertDialogContent>
  </AlertDialogRoot>
)

export default AlertDialogDemo
