import { styled } from '~/stitches'

interface ParagraphProps {
  children: React.ReactNode
}

const P = styled('p', { fontSize: '$5' })

export const Paragraph = (props: ParagraphProps) => {
  return <P {...props}>{props.children}</P>
}
