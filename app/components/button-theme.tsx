import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { Theme, useTheme } from '~/utils/theme'
import { Icon } from '~/components'

export const ButtonToggleThemeContainer = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  userSelect: 'none',
  cursor: 'pointer',
  borderRadius: '$round',
  fontSize: '$5',
  size: '$6',
  color: '$yellow11',
  backgroundColor: '$yellow3',
  '&:hover': { backgroundColor: '$yellow4' },
  '&:active': { backgroundColor: '$yellow5' },
  '&:focus': { outline: '$blue9 dotted 2px', outlineOffset: '1px' },
})

export const ButtonToggleTheme: FunctionComponent = () => {
  const [theme, setTheme] = useTheme()

  const handleChangeTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  return (
    <ButtonToggleThemeContainer onClick={handleChangeTheme}>
      <Icon name={theme === Theme.DARK ? Theme.DARK : Theme.LIGHT} />
    </ButtonToggleThemeContainer>
  )
}

export default ButtonToggleTheme
