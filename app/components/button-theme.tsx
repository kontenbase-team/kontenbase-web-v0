import { styled } from '~/stitches'
import { buttonStyles } from '~/components'

export const ButtonToggleThemeContainer = styled('button', {
  ...buttonStyles,
})

interface ButtonToggleThemeProps {}

export const ButtonToggleTheme: React.FunctionComponent<ButtonToggleThemeProps> =
  () => {
    return <ButtonToggleThemeContainer>DARK</ButtonToggleThemeContainer>
  }

export default ButtonToggleTheme
