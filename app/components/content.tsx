import { styled } from '~/stitches'

interface ContentProps {
  layout?: 'center-horizontal' | 'center-vertical' | undefined
  size?: 'adaptive' | undefined
  children: React.ReactNode
}

const ContentContainer = styled('div', {
  width: '1280px',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 'calc(100% - 1rem * 2)',
  '@desktop': {
    maxWidth: 'calc(100% - 2rem * 2)',
  },
  variants: {
    size: {
      adaptive: {
        maxWidth: '100%',
        '@tablet': {
          maxWidth: 'calc(100% - 1rem * 2)',
        },
        '@desktop': {
          maxWidth: 'calc(100% - 2rem * 2)',
        },
      },
    },
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
    <ContentContainer className="content" {...props}>
      {props.children}
    </ContentContainer>
  )
}
