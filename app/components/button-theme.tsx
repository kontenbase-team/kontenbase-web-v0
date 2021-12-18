import { styled } from '~/stitches'
import { buttonStyles } from '~/components'

export const ButtonToggleThemeContainer = styled('button', {
  all: 'unset',
  userSelect: 'none',
  cursor: 'pointer',
  height: '$4',
  px: '$2',
  fontWeight: '$bold',
  borderRadius: '$pill',
  fontSize: '$1',
  color: '$white',
  backgroundColor: '$gray9',
  '&:hover': { backgroundColor: '$gray10' },
  '&:active': { backgroundColor: '$gray11' },
  '&:focus': { backgroundColor: '$gray11' },
})

interface ButtonToggleThemeProps {}

export const ButtonToggleTheme: React.FunctionComponent<ButtonToggleThemeProps> =
  () => {
    return <ButtonToggleThemeContainer>DARK</ButtonToggleThemeContainer>
  }

export default ButtonToggleTheme
