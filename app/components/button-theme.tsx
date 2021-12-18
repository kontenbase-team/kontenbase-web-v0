import { useState, useEffect, FunctionComponent } from 'react'

import { styled, darkTheme } from '~/stitches'

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
        {theme === 'theme-default' ? 'LIGHT' : 'DARK'}
      </ButtonToggleThemeContainer>
    )
  }

export default ButtonToggleTheme
