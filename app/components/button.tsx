import { styled } from '~/stitches'

export const buttonStyles = {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  cursor: 'pointer',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$4',
  px: '$4',
  fontFamily: '$untitled',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$gray2',
    boxShadow: 'inset 0 0 0 1px $colors$gray7',
    color: '$gray8',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        px: '$2',
        fontSize: '$1',
        lineHeight: '$sizes$5',
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        px: '$3',
        fontSize: '$3',
        lineHeight: '$sizes$6',
      },
      '3': {
        borderRadius: '$2',
        height: '$7',
        px: '$4',
        fontSize: '$4',
        lineHeight: '$sizes$7',
      },
    },
    variant: {
      brand: {
        color: '$white',
        backgroundColor: '$brand9',
        '@hover': {
          '&:hover': {
            color: '$white',
            backgroundColor: '$brand10',
          },
        },
        '&:active': {
          backgroundColor: '$brand11',
        },
        '&:focus': {
          backgroundColor: '$brand11',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$gray4',
        boxShadow: 'inset 0 0 0 1px $colors$gray8',
        color: '$gray11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$gray5',
            boxShadow: 'inset 0 0 0 1px $colors$gray8',
          },
        },
        '&:active': {
          backgroundColor: '$gray5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8',
        },
      },
      waiting: {
        backgroundColor: '$gray4',
        boxShadow: 'inset 0 0 0 1px $colors$gray8',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$gray5',
            boxShadow: 'inset 0 0 0 1px $colors$gray8',
          },
        },
        '&:active': {
          backgroundColor: '$gray5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray8',
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
  },

  defaultVariants: {
    variant: 'brand',
    size: '2',
  },
}

export const Button = styled('button', {
  ...buttonStyles,
})

/**
 * Anchor Button
 */
export const AnchorButton = styled('a', {
  ...buttonStyles,
})
