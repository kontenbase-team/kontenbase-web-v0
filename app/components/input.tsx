import { styled } from '~/stitches'

const InputStyled = styled('input', {
  padding: '1rem',
  fontSize: '$input',
  variants: {
    size: {
      wide: {
        width: '100%',
      },
    },
  },
})

interface InputProps {
  placeholder?: string
  size?: 'wide' | undefined
  type: string
  value?: string
}

export const Input = (props: InputProps) => {
  return <InputStyled size={props.size} {...props} />
}
