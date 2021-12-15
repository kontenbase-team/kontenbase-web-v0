import { styled } from '~/stitches'

interface ContentProps {
  layout?: 'center' | undefined
  children: React.ReactNode
}

const ContentContainer = styled('div', {
  width: '1200px',
  // maxWidth: '100%',
  maxWidth: 'calc(100% - var(--gutter) * 2)',
  marginRight: 'auto',
  marginLeft: 'auto',

  variants: {
    layout: {
      center: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
})

export const Content = (props: ContentProps) => {
  return (
    <ContentContainer layout={props.layout}>{props.children}</ContentContainer>
  )
}
