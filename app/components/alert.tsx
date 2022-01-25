import { styled } from '~/stitches'

interface AlertProps {
  variant: 'success' | 'error' | undefined
  children: React.ReactNode
}

const AlertContainer = styled('div', {
  fontSize: '0.9rem',
  variants: {
    variant: {
      success: {
        color: '$success1',
      },
      error: {
        color: '$error1',
      },
    },
  },
})

export const Alert = (props: AlertProps) => (
    <AlertContainer variant={props.variant}>
      <p>{props.children}</p>
    </AlertContainer>
  )
