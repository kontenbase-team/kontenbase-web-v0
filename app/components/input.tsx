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
  variants: {
    size: {
      wide: {
        width: '100%',
      },
      fixed: {
        minWidth: '120px',
        '@tablet': {
          minWidth: '150px',
        },
      },
    },
    border: {
      'radius-left': {
        borderRadius: '0.5rem 0 0 0.5rem',
      },
      'radius-right': {
        borderRadius: '0 0.5rem 0.5rem 0',
      },
    },
    variant: {
      text: {
        color: '$accent12',
        backgroundColor: '$accent1',
        borderColor: '$accent6',
        borderStyle: 'solid',
        borderWidth: '1px 0 1px 1px',
      },
      primary: {
        cursor: 'pointer',
        color: '$white',
        backgroundColor: '$accent9',
        '&:hover': {
          backgroundColor: '$accent10',
        },
        '&:focus': {
          backgroundColor: '$accent11',
        },
      },
    },
  },
})

interface InputProps {
  placeholder?: string
  type: string
  value?: string
  size?: 'wide' | 'fixed' | undefined
  variant?: 'primary' | 'text' | undefined
  border?: 'radius-left' | 'radius-right' | undefined
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
