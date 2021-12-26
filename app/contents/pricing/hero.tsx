import { styled } from '~/stitches'
import { Hero, Heading, Paragraph } from '~/components'

interface PricingHeroProps {
  children?: React.ReactNode
}

const PricingHeroContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  '@tablet': {
    flexDirection: 'column',
  },
  '@tv': {
    textAlign: 'left',
    flexDirection: 'row',
  },
})

const PricingHeroMain = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '600px',
  width: '100%',
  h1: { maxWidth: '23ch' },
  p: { maxWidth: '50ch' },
})

export const PricingHero = (props: PricingHeroProps) => {
  return (
    <Hero>
      <PricingHeroContainer>
        <PricingHeroMain>
          <Heading as="h1">Pricing Plan</Heading>
          <Paragraph>Choose what's best for you or your team.</Paragraph>
        </PricingHeroMain>
      </PricingHeroContainer>
    </Hero>
  )
}
