import { styled } from '~/stitches'

interface HeroProps {
  children: React.ReactNode
}

const HeroContainer = styled('div', {
  padding: '3rem 0',
  display: 'flex',
  gap: '3rem',
})

export const Hero = (props: HeroProps) => {
  return <HeroContainer>{props.children}</HeroContainer>
}
