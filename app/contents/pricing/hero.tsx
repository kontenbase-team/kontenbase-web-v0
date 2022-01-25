import { Hero, Heading } from '~/components'
import { styled } from '~/stitches'

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

export const PricingHero = (props: PricingHeroProps) => (
    <Hero>
      <PricingHeroContainer id="pricing-hero">
        <PricingHeroContent id="pricing-hero-content">
          <Heading as="h1" css={{ mb: 0 }}>
            Simple Pricing
          </Heading>
          <Heading as="h2" color="solid">
            Choose what's best.
          </Heading>
        </PricingHeroContent>
      </PricingHeroContainer>
    </Hero>
  )
