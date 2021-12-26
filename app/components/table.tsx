import { styled } from '~/stitches'

export const Caption = styled('caption', {
  textAlign: 'start',
  marginBottom: '$5',
})

export const Tbody = styled('tbody', {
  width: '100%',
})

export const Tfoot = styled('tfoot', {})

export const Tr = styled('tr', {})

export const Th = styled('th', {
  fontWeight: 'unset',
  textAlign: 'start',
  fontSize: '$5',
  py: '$5',
  borderBottom: '1px solid $gray4',
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
  py: '$5',
  borderBottom: '1px solid $gray4',
  fontSize: '$3',
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

export const Thead = styled('thead', {
  [`& ${Th}`]: {
    fontSize: '$5',
    color: '$gray11',
  },
  [`& ${Td}`]: {
    fontSize: '$3',
    color: '$gray11',
  },
})

export const Table = styled('table', {
  width: '100%',
  tableLayout: 'fixed',
  borderSpacing: 0,
  fontSize: '$5',
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
