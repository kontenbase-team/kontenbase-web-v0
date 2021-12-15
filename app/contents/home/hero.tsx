import { styled } from '~/stitches'
import { Hero, Heading, Paragraph } from '~/components'

interface HomeHeroProps {
  children?: React.ReactNode
}

const HomeHeroMain = styled('main', {
  maxWidth: '550px',
})

const HomeHeroAside = styled('aside', {})

export const HomeHero = (props: HomeHeroProps) => {
  return (
    <Hero>
      <HomeHeroMain>
        <Heading as="h1">
          No Code Backend API,
          <br />
          Fast and Easy!
        </Heading>
        <Paragraph>
          Kontenbase allows you to easily create backend API, auth, and storage
          in less than 1 minute without coding.
        </Paragraph>
      </HomeHeroMain>

      <HomeHeroAside>
        <h2>Carousel Images</h2>
      </HomeHeroAside>
    </Hero>
  )
}
