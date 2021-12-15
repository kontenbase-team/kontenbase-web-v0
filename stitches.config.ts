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
    desktop: '(min-width: 768px)',
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
  },
})

const darkTheme = createTheme('dark-theme', {
  colors: {
    ...tomatoDark,
    ...blueDark,
    ...grayDark,
    ...greenDark,
    ...redDark,
    ...yellowDark,

    black: '#000000',
    white: '#ffffff',

    accent0: '$tomatoDark12',
    accent1: '$tomatoDark11',
    accent2: '$tomatoDark10',
    accent3: '$tomatoDark9',

    info1: '$cyanDark9',
    info2: '$cyanDark10',

    success1: '$greenDark9',
    success2: '$greenDark10',

    valid1: '$greenDark9',
    valid2: '$greenDark10',

    warning1: '$yellowDark9',
    warning2: '$yellowDark10',

    pending1: '$yellowDark9',
    pending2: '$yellowDark10',

    text1: '$accent1',
    text2: '$accent2',
    text3: '$accent3',
    text4: '$grayDark12',
    text5: '$grayDark11',
    text6: '$grayDark10',
  },
})
