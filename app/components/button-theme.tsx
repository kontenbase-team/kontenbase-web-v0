import { FunctionComponent } from 'react'

import { Icon } from '~/components'
import { styled } from '~/stitches'
import { Theme, useTheme } from '~/utils/theme'

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
  color: '$yellow11',
  backgroundColor: '$yellow3',
  fontSize: '$3',
  size: '25px',
  '@tablet': { fontSize: '$5', size: '32px' },
  '@desktop': { fontSize: '$6', size: '35px' },
  '&:hover': { backgroundColor: '$yellow4' },
  '&:active': { backgroundColor: '$yellow5' },
  '&:focus': {
    outline: 'none',
    '@tablet': { outline: '$blue9 solid 2px', outlineOffset: '1px' },
  },
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
