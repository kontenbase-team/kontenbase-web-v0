import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface ContainerProps {
  css?: any
  children: React.ReactNode
}

const ContainerStyled = styled('div', {
  width: '100%',
  maxWidth: '960px',
})

export const Container: FunctionComponent<ContainerProps> = ({
  css,
  children,
}) => <ContainerStyled css={css}>{children}</ContainerStyled>
