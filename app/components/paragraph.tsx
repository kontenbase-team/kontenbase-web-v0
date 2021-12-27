import { styled } from '~/stitches'

export const P = styled('p', {
  fontSize: '$3',
  variants: {
    size: {
      adaptive: {
        fontSize: '$1',
        '@tablet': {
          fontSize: '$2',
        },
        '@desktop': {
          fontSize: '$3',
        },
      },
    },
  },
})
