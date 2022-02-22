import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface ContentProps {
  css?: any
  layout?: 'center-horizontal' | 'center-vertical' | undefined
  size?: 'adaptive' | undefined
  children: React.ReactNode
}

const ContentStyled = styled('div', {
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

export const Content: FunctionComponent<ContentProps> = ({
  css,
  layout,
  size,
  children,
}) => (
  <ContentStyled className="content" css={css} layout={layout} size={size}>
    {children}
  </ContentStyled>
)
