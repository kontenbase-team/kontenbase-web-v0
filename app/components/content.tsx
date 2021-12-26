import { styled } from '~/stitches'

interface ContentProps {
  layout?: 'center-horizontal' | 'center-vertical' | undefined
  children: React.ReactNode
}

const ContentContainer = styled('div', {
  width: '1280px',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 'calc(100% - 1rem * 2)',
  '@tablet': {
    maxWidth: 'calc(100% - 2rem * 2)',
  },
  variants: {
    layout: {
      'center-horizontal': {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      },
      'center-vertical': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  },
})

export const Content = (props: ContentProps) => {
  return (
    <ContentContainer className="content" layout={props.layout}>
      {props.children}
    </ContentContainer>
  )
}
