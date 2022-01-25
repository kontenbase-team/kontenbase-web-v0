import { Hero, Heading } from '~/components'
import { styled } from '~/stitches'

const BlogHeroContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
})

const BlogHeroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
})

export const BlogHero = () => (
  <Hero>
    <BlogHeroContainer id="blog-hero">
      <BlogHeroContent id="blog-hero-content">
        <Heading as="h1" css={{ mb: 0 }}>
          Blog
        </Heading>
        <Heading as="h2" color="solid">
          Updates from the Kontenbase team
        </Heading>
      </BlogHeroContent>
    </BlogHeroContainer>
  </Hero>
)
