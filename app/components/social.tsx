import { styled } from '~/stitches'
import { Anchor } from '~/components'

const socialMediaLinks = [
  { name: 'Twitter', url: 'https://a.kontenbase.com/twitter' },
  { name: 'LinkedIn', url: 'https://a.kontenbase.com/linkedin' },
  { name: 'Instagram', url: 'https://a.kontenbase.com/instagram' },
  { name: 'Facebook', url: 'https://a.kontenbase.com/facebook' },
  { name: 'GitHub', url: 'https://a.kontenbase.com/github' },
  { name: 'YouTube', url: 'https://a.kontenbase.com/youtube' },
]

const SocialContainer = styled('div', {
  display: 'flex',
  gap: '0.5rem',
})

export const SocialMediaLinks = () => {
  return (
    <SocialContainer>
      {socialMediaLinks.map((link, index) => {
        return (
          <Anchor key={link.name} href={link.url}>
            {link.name}
          </Anchor>
        )
      })}
    </SocialContainer>
  )
}
