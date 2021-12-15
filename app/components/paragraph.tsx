import { styled } from '~/stitches'

interface ParagraphProps {
  children: React.ReactNode
}

const P = styled('p', { fontSize: '1.2rem' })

export const Paragraph = (props: ParagraphProps) => {
  return <P>{props.children}</P>
}
