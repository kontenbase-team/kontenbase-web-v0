import { styled } from '~/stitches'

export const Span = styled('span', {
  variants: {
    color: {
      normal: { color: '$text' },
    },
    lang: {
      en: { fontFamily: '$fontDefault' },
      ja: { fontFamily: '$fontJapanese' },
      ko: { fontFamily: '$fontDefault' },
      zh: { fontFamily: '$fontDefault' },
      th: { fontFamily: '$fontDefault' },
      ar: { fontFamily: '$fontDefault' },
    },
  },
})
