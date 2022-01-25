import { Hero, Heading, P } from '~/components'
import { HomeCarousel } from '~/contents'
import { styled } from '~/stitches'

interface HomeHeroProps {
  children?: React.ReactNode
}

const HomeHeroContainer = styled('div', {
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

const HomeHeroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '600px',
  width: '100%',
  h1: { maxWidth: '23ch' },
  p: { maxWidth: '50ch' },
  alignItems: 'center',
  '@tablet': {
    alignItems: 'flex-start',
  },
})

const HomeHeroAside = styled('aside', {
  maxWidth: '720px',
  width: '100%',
})

export const HomeHero = (props: HomeHeroProps) => (
    <Hero>
      <HomeHeroContainer>
        <HomeHeroContent>
          <Heading as="h1">No Code Backend API, Fast and Easy!</Heading>
          <P>
            Kontenbase allows you to easily create backend API, auth, and
            storage in less than 1 minute without coding.
          </P>
        </HomeHeroContent>

        <HomeHeroAside>
          <HomeCarousel />
        </HomeHeroAside>
      </HomeHeroContainer>
    </Hero>
  )
