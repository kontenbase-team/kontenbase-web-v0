import { styled } from '~/stitches'

interface ContentProps {
  children: React.ReactNode
}

const ContentContainer = styled('div', {
  width: '1200px',
  maxWidth: 'calc(100% - var(--gutter) * 2)',
  marginRight: 'auto',
  marginLeft: 'auto',
})

export const Content = (props: ContentProps) => {
  return <ContentContainer>{props.children}</ContentContainer>
}
