import { styled } from '~/stitches'
import { Content } from '~/components'

interface HeroProps {
  children: React.ReactNode
}

const HeroContainer = styled('div', {
  padding: '2rem 0',
  '@tablet': { padding: '3rem 0' },
  '@desktop': { padding: '4rem 0' },
})

export const Hero = (props: HeroProps) => {
  return (
    <HeroContainer>
      <Content>{props.children}</Content>
    </HeroContainer>
  )
}
