import { useState, useEffect, FunctionComponent } from 'react'

import { styled, darkTheme } from '~/stitches'
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

interface ButtonToggleThemeProps {}

export const ButtonToggleTheme: FunctionComponent<ButtonToggleThemeProps> =
  () => {
    const [theme, setTheme] = useState('theme-default')

    useEffect(() => {
      document.body.classList.remove('theme-default', darkTheme)
      document.body.classList.add(theme)
    }, [theme])

    return (
      <ButtonToggleThemeContainer
        onClick={() =>
          setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')
        }
      >
        <Icon name={theme === 'theme-default' ? 'light' : 'dark'} />
      </ButtonToggleThemeContainer>
    )
  }

export default ButtonToggleTheme
