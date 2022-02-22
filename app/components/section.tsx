import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface SectionProps {
  css?: any
  children: React.ReactNode
}

const SectionStyled = styled('div', {
  width: '100%',
  maxWidth: '960px',
})

export const Section: FunctionComponent<SectionProps> = ({ css, children }) => (
  <SectionStyled css={css}>{children}</SectionStyled>
)
