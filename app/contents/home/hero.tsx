import { styled } from '~/stitches'
import { Hero, Heading, Paragraph, Box, Carousel } from '~/components'

interface HomeHeroProps {
  children?: React.ReactNode
}

const HomeHeroContainer = styled('div', {
  display: 'flex',
  gap: '3rem',
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

const HomeHeroMain = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '600px',
  width: '100%',
  h1: {
    maxWidth: '21ch',
  },
})

const HomeHeroAside = styled('aside', {
  maxWidth: '720px',
  width: '100%',
})

export const HomeHero = (props: HomeHeroProps) => {
  return (
    <Hero>
      <HomeHeroContainer>
        <HomeHeroMain>
          <Heading as="h1">No Code Backend API, Fast and Easy!</Heading>
          <Paragraph>
            Kontenbase allows you to easily create backend API, auth, and
            storage in less than 1 minute without coding.
          </Paragraph>
        </HomeHeroMain>

        <HomeHeroAside>
          <Carousel />
        </HomeHeroAside>
      </HomeHeroContainer>
    </Hero>
  )
}
