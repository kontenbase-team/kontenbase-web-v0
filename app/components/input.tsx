import { styled } from '~/stitches'

const InputStyled = styled('input', {
  padding: '1rem',
  fontSize: '$input',
  border: 'none',
  fontWeight: '600',
  variants: {
    size: {
      wide: {
        width: '100%',
      },
      fixed: {
        minWidth: '150px',
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
        color: '$accent1',
        backgroundColor: '$accent12',
      },
      primary: {
        cursor: 'pointer',
        color: '$accent12',
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
