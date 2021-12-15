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
  size?: 'wide' | 'fixed' | undefined
  type: string
  value?: string
  variant?: 'primary' | 'text' | undefined
}

export const Input = (props: InputProps) => {
  return <InputStyled variant={props.variant} size={props.size} {...props} />
}
