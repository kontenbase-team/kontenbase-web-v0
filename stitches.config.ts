import {
  tomato,
  tomatoDark,
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  red,
  redDark,
  yellow,
  yellowDark,
} from '@radix-ui/colors'

import { createStitches } from '@stitches/react'

const colorTokens = {
  black: 'black',
  white: 'white',

  background1: '$gray1',
  background2: '$gray2',
  background3: '$gray3',
  background4: '$gray4',
  background5: '$gray5',
  background6: '$gray6',

  accent1: '$tomato1',
  accent2: '$tomato2',
  accent3: '$tomato3',
  accent4: '$tomato4',
  accent5: '$tomato5',
  accent6: '$tomato6',
  accent7: '$tomato7',
  accent8: '$tomato8',
  accent9: '$tomato9',
  accent10: '$tomato10',
  accent11: '$tomato11',
  accent12: '$tomato12',

  heading1: '$accent11',
  heading2: '$accent10',
  heading3: '$accent9',
  heading4: '$accent9',
  heading5: '$accent9',
  heading6: '$accent9',

  text1: '$gray12',

  success1: '$green9',
  success2: '$green10',

  valid1: '$green9',
  valid2: '$green10',
  error1: '$red9',
  error2: '$red10',

  warning1: '$yellow9',
  warning2: '$yellow10',
  pending1: '$yellow9',
  pending2: '$yellow10',
}

const fontSizeTokens = {
  navlink1: '0.9rem',
  navlink2: '1rem',
  navlink3: '1.1rem',

  input1: '1rem',
  input2: '1.1rem',
  input3: '1.2rem',
}

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...tomato,
      ...blue,
      ...gray,
      ...green,
      ...red,
      ...yellow,
      ...colorTokens,
    },
    fontSizes: {
      ...fontSizeTokens,
    },
  },
  media: {
    tablet: '(min-width: 501px)',
    desktop: '(min-width: 769px)',
    tv: '(min-width: 1201px)',
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
  },
})

export const darkTheme = createTheme('dark-mode', {
  colors: {
    ...tomatoDark,
    ...blueDark,
    ...grayDark,
    ...greenDark,
    ...redDark,
    ...yellowDark,
    ...colorTokens,
  },
})
