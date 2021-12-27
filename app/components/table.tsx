import { styled } from '~/stitches'

export const Caption = styled('caption', {
  textAlign: 'start',
  marginBottom: '$5',
})

export const Tbody = styled('tbody', {
  width: '100%',
})

export const Tfoot = styled('tfoot', {})

export const Tr = styled('tr', {
  px: '$1',
  fontSize: '$1',
  '@tablet': {
    px: '$2',
    fontSize: '$2',
  },
  '@desktop': {
    px: '$3',
    fontSize: '$3',
  },
  '&>:not([hidden])~:not([hidden])': {
    borderLeft: '1px solid $gray4',
  },
})

export const Th = styled('th', {
  px: '$3',
  py: '$5',
  fontWeight: 'unset',
  textAlign: 'start',
  borderBottom: '1px solid $gray4',
  verticalAlign: 'top',
  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4',
      },
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
    },
  },
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
})

export const Td = styled('td', {
  px: '$3',
  py: '$5',
  borderBottom: '1px solid $gray4',
  verticalAlign: 'top',
  variants: {
    variant: {
      group: {
        bc: '$brand3',
      },
    },
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4',
      },
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
    },
  },
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
})

export const Thead = styled('thead', {})

export const Table = styled('table', {
  width: '100%',
  tableLayout: 'fixed',
  borderSpacing: 0,
  mb: '$52',
  variants: {
    striped: {
      true: {
        [`& ${Tbody}`]: {
          [`& ${Tr}`]: {
            '&:nth-child(odd)': {
              bc: '$gray2',
            },
          },
        },
      },
    },
  },
})
