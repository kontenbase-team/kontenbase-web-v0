import { styled } from '~/stitches'

interface BoxProps {
  children: React.ReactNode
}

const BoxContainer = styled('div', {
  backgroundColor: 'gray',
  height: '300px',
})

export const Box = (props: BoxProps) => <BoxContainer {...props}>{props.children}</BoxContainer>
