import { styled } from '~/stitches'

const InputStyled = styled('input', {
  border: 'none',
  padding: '0.75rem',
  fontSize: '$input1',

  '@tablet': {
    padding: '0.9rem',
    fontSize: '$input2',
  },
  '@desktop': {
    padding: '1rem',
    fontSize: '$input3',
  },

  borderStyle: 'solid',
  borderWidth: '1px 1px 1px 1px',
  borderRadius: '0.5rem',

  variants: {
    size: {
      wide: {
        width: '100%',
      },
      fixed: {
        minWidth: '120px',
        '@tablet': {
          minWidth: '150px',
          maxWidth: '200px',
        },
      },
    },
    border: {
      'radius-mobile': {
        '@tablet': { borderRadius: '0' },
      },
      'radius-left': {
        '@tablet': { borderRadius: '0.5rem 0 0 0.5rem' },
      },
      'radius-right': {
        '@tablet': { borderRadius: '0 0.5rem 0.5rem 0' },
      },
    },
    variant: {
      text: {
        color: '$brand12',
        backgroundColor: '$brand1',
        borderColor: '$brand6',
        '@tablet': {
          borderWidth: '1px 0 1px 1px',
        },
      },
      submit: {
        cursor: 'pointer',
        color: '$white',
        backgroundColor: '$brand9',
        textAlign: 'center',
        border: '1px',
        '&:hover': { backgroundColor: '$brand10' },
        '&:focus': { backgroundColor: '$brand11' },
        '&:disabled': { backgroundColor: '$brand6' },
      },
    },
  },
})

interface InputProps {
  name?: string | undefined
  placeholder?: string
  type: string
  value?: string
  disabled?: boolean

  size?: 'wide' | 'fixed' | undefined
  variant?: 'text' | 'submit' | undefined
  border?: 'radius-mobile' | 'radius-left' | 'radius-right' | undefined
  required?: boolean
}

export const Input = (props: InputProps) => {
  return (
    <InputStyled
      variant={props.variant}
      size={props.size}
      border={props.border}
      {...props}
    />
  )
}
