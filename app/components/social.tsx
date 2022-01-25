import { AnchorIcon, Icon } from '~/components'
import { styled } from '~/stitches'

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
  gap: '1rem',
  fontSize: '1.5rem',
})

export const SocialMediaLinks = () => (
    <SocialContainer>
      {socialMediaLinks.map((link, index) => (
          <AnchorIcon key={link.name} href={link.url}>
            <Icon name={link.name.toLowerCase()} />
          </AnchorIcon>
        ))}
    </SocialContainer>
  )
