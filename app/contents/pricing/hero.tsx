import { styled } from '~/stitches'
import { Hero, Heading, Paragraph } from '~/components'

interface PricingHeroProps {
  children?: React.ReactNode
}

const PricingHeroContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
})

const PricingHeroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
})

export const PricingHero = (props: PricingHeroProps) => {
  return (
    <Hero>
      <PricingHeroContainer id="pricing-hero">
        <PricingHeroContent id="pricing-hero-content">
          <Heading as="h1">Simple Pricing Plan</Heading>
          <Paragraph>Choose what's best for you or your team.</Paragraph>
        </PricingHeroContent>
      </PricingHeroContainer>
    </Hero>
  )
}