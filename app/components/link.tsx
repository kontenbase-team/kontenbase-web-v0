import { FunctionComponent } from 'react'
import { Link as RemixLink } from 'remix'

import { styled } from '~/stitches'

interface LinkProps {
  css?: any
  to: string
  children: React.ReactNode
}

const LinkStyled = styled(RemixLink, {
  textDecoration: 'underline',
  transition: 'color 0.2s ease',
  borderRadius: '$2',
  color: '$brand9',
  '&:hover': { color: '$brand11' },
})

export const Link: FunctionComponent<LinkProps> = ({ css, to, children }) => (
  <LinkStyled css={css} to={to} prefetch="intent">
    {children}
  </LinkStyled>
)
