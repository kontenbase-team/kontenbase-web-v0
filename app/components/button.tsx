import { styled } from '~/stitches'
import { buttonStyles } from '~/styles'

export const ButtonGroup = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
})

export const Button = styled('button', {
  ...buttonStyles,
})
