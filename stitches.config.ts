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

      background1: '$gray1',
      background2: '$gray2',

      text1: '$accent11',
      text2: '$accent10',
      text3: '$accent9',
      text4: '$gray12',
      text5: '$gray11',
      text6: '$gray10',

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
    },
    fontSizes: {
      input: '1.2rem',
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

    background1: '$gray1',
    background2: '$gray2',

    text1: '$accent11',
    text2: '$accent10',
    text3: '$accent9',
    text4: '$gray12',
    text5: '$gray11',
    text6: '$gray10',

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
  },
})
