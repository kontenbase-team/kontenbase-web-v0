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

      black: 'black',
      white: 'white',

      accent0: '$tomato12',
      accent1: '$tomato11',
      accent2: '$tomato10',
      accent3: '$tomato9',

      info1: '$cyan9',
      info2: '$cyan10',

      success1: '$green9',
      success2: '$green10',

      valid1: '$green9',
      valid2: '$green10',

      warning1: '$yellow9',
      warning2: '$yellow10',

      pending1: '$yellow9',
      pending2: '$yellow10',

      text1: '$accent1',
      text2: '$accent2',
      text3: '$accent3',
      text4: '$gray12',
      text5: '$gray11',
      text6: '$gray10',
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

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...tomatoDark,
    ...blueDark,
    ...grayDark,
    ...greenDark,
    ...redDark,
    ...yellowDark,

    accent0: '$tomato12',
    accent1: '$tomato11',
    accent2: '$tomato10',
    accent3: '$tomato9',

    info1: '$cyan9',
    info2: '$cyan10',

    success1: '$green9',
    success2: '$green10',

    valid1: '$green9',
    valid2: '$green10',

    warning1: '$yellow9',
    warning2: '$yellow10',

    pending1: '$yellow9',
    pending2: '$yellow10',

    text1: '$accent1',
    text2: '$accent2',
    text3: '$accent3',
    text4: '$gray12',
    text5: '$gray11',
    text6: '$gray10',
  },
})
