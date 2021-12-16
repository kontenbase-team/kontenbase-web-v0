import { styled } from '~/stitches'
import { Content } from '~/components'

interface HeroProps {
  children: React.ReactNode
}

const HeroContainer = styled('div', {
  padding: '3rem 0',
  '@tablet': { padding: '6rem 0' },
  '@desktop': { padding: '7rem 0' },
})

export const Hero = (props: HeroProps) => {
  return (
    <HeroContainer>
      <Content>{props.children}</Content>
    </HeroContainer>
  )
}
