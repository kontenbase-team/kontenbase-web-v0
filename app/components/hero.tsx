import { styled } from '~/stitches'
import { Content } from '~/components'

interface HeroProps {
  children: React.ReactNode
}

const HeroContainer = styled('div', {
  padding: '3rem 0',
  '@tablet': { padding: '3.5rem 0' },
  '@desktop': { padding: '4rem 0' },
  '@tv': { padding: '4.5rem 0' },
})

export const Hero = (props: HeroProps) => {
  return (
    <HeroContainer id="hero">
      <Content>{props.children}</Content>
    </HeroContainer>
  )
}
