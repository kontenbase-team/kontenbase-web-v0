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
  fontWeight: '$bold',
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
      adaptive: {
        borderRadius: '$1',
        height: '$5',
        fontSize: '$1',
        px: '$2',
        lineHeight: '$sizes$5',
        '@tablet': {
          borderRadius: '$2',
          height: '$6',
          px: '$3',
          fontSize: '$3',
          lineHeight: '$sizes$6',
        },
        '@desktop': {
          borderRadius: '$2',
          height: '$7',
          px: '$4',
          fontSize: '$4',
          lineHeight: '$sizes$7',
        },
      },
    },
    variant: {
      brand: {
        color: '$white',
        backgroundColor: '$brand9',
        '@hover': {
          '&:hover': { color: '$white', backgroundColor: '$brand10' },
        },
        '&:active': { backgroundColor: '$brand11' },
        '&:focus': { backgroundColor: '$brand11' },
      },
      cancel: {
        color: '$brand9',
        border: '1px solid $brand9',
        '&:hover': { backgroundColor: '$brand2', borderColor: '$brand10' },
        '&:active': { backgroundColor: '$brand3', borderColor: '$brand11' },
        '&:focus': { backgroundColor: '$brand3', borderColor: '$brand11' },
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
    mode: {
      left: { borderRadius: '0 0 $2 $2' },
      right: { borderRadius: '$2 $2 0 0' },
    },
  },

  defaultVariants: {
    variant: 'brand',
    size: '2',
  },
}
