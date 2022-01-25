import {
  blackA,
  whiteA,
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  mauve,
  mauveDark,
  red,
  redA,
  redDark,
  redDarkA,
  tomato,
  tomatoA,
  tomatoDark,
  tomatoDarkA,
  yellow,
  yellowDark,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

import type * as Stitches from '@stitches/react'

export type { VariantProps } from '@stitches/react'

/**
 * Because it's semantic, need to be applied to both default and dark theme
 * It's going to replace the light mode colors with dark mode colors
 */
const colorTokens = {
  black: '$blackA12',
  white: '$whiteA12',

  background1: '$mauve1',
  background2: '$mauve2',
  background3: '$mauve3',
  background4: '$mauve4',
  background5: '$mauve5',
  background6: '$mauve6',

  brand1: '$tomato1',
  brand2: '$tomato2',
  brand3: '$tomato3',
  brand4: '$tomato4',
  brand5: '$tomato5',
  brand6: '$tomato6',
  brand7: '$tomato7',
  brand8: '$tomato8',
  brand9: '$tomato9',
  brand10: '$tomato10',
  brand11: '$tomato11',
  brand12: '$tomato12',

  heading1: '$brand11',
  heading2: '$brand11',
  heading3: '$brand11',
  heading4: '$gray12',
  heading5: '$gray12',
  heading6: '$gray12',

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

  hiContrast: '$slate12',
  loContrast: '$slate1',
  canvas: 'hsl(0 0% 15%)',
  panel: '$slate3',
  transparentPanel: 'hsl(0 100% 100% / 97%)',
  shadowLight: 'hsl(206 22% 7% / 35%)',
  shadowDark: 'hsl(206 22% 7% / 20%)',
}

const spaceTokens = {
  px: '1px',
  none: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

const sizesTokens = {
  ...spaceTokens,

  none: '0',
  1: '5px',
  2: '10px',
  3: '15px',
  4: '20px',
  5: '25px',
  6: '35px',
  7: '45px',
  8: '65px',
  9: '80px',
  min: 'min-content',
  max: 'max-content',
  full: '100%',
}

const radiiTokens = {
  1: '4px',
  2: '6px',
  3: '8px',
  4: '12px',
  round: '50%',
  full: '9999px',
  pill: '9999px',
}

const zIndicesTokens = {
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  hide: -1,
  max: '999',
  auto: 'auto',
  base: '0',
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
}

const fontsTokens = {
  untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
  body: 'system-ui, sans-serif',
  heading: 'Georgia, serif',
  mono: 'Menlo, monospace',
}

const fontSizesTokens = {
  '0': '10px',
  1: '12px',
  2: '14px',
  3: '16px',
  4: '18px',
  5: '1.2rem',
  6: '20px',
  7: '25px',
  8: '35px',
  9: '45px',
  10: '55px',

  input1: '1rem',
  input2: '1.1rem',
  input3: '1.2rem',
}

const fontWeightsTokens = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const lineHeightsTokens = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: '2',
  1: '.25rem',
  2: '.5rem',
  3: '.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
}

const letterSpacingsTokens = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

const mediaTokens = {
  mobile: '(min-width: 0px)',
  tablet: '(min-width: 501px)',
  desktop: '(min-width: 769px)',
  tv: '(min-width: 1201px)',
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
}

const utilsFunctions = {
  // Interferes with paragraph element
  // p: (value: Stitches.PropertyValue<'padding'>) => ({
  //   padding: value,
  // }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

  fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
    flexDirection: value,
  }),
  fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

  ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
    alignItems: value,
  }),
  ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
    alignContent: value,
  }),
  jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
    justifyContent: value,
  }),
  as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
  fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
  fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
    flexShrink: value,
  }),
  fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

  bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),

  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value,
  }),
  btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

  lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
    lineHeight: value,
  }),

  ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
  oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

  pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
    pointerEvents: value,
  }),
  us: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value,
  }),

  appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
}

/**
 * The actual Stitches export
 * Configuration:
 * - theme
 *   - colors
 *   - space
 *   - sizes
 *   - radii
 *   - zIndices
 *   - fonts
 *   - fontSizes
 *   - fontWeights
 *   - lineHeights
 *   - letterSpacings
 * - media
 * - utils
 */
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
      ...blackA,
      ...whiteA,
      ...tomato,
      ...tomatoA,
      ...blue,
      ...gray,
      ...green,
      ...mauve,
      ...red,
      ...redA,
      ...yellow,
      ...colorTokens,
      textAbsolute1: '$gray12',
    },
    space: { ...spaceTokens },
    sizes: { ...sizesTokens },
    radii: { ...radiiTokens },
    zIndices: { ...zIndicesTokens },
    fonts: { ...fontsTokens },
    fontSizes: { ...fontSizesTokens },
    fontWeights: { ...fontWeightsTokens },
    lineHeights: { ...lineHeightsTokens },
    letterSpacings: { ...letterSpacingsTokens },
  },
  media: {
    ...mediaTokens,
  },
  utils: {
    ...utilsFunctions,
  },
})

export type CSS = Stitches.CSS<typeof config>

export const lightTheme = createTheme('light-mode')

export const darkTheme = createTheme('dark-mode', {
  colors: {
    ...tomatoDark,
    ...tomatoDarkA,
    ...blueDark,
    ...grayDark,
    ...greenDark,
    ...mauveDark,
    ...redDark,
    ...redDarkA,
    ...yellowDark,
    ...colorTokens,
  },
})
