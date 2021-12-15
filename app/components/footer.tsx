import { styled } from '~/stitches'

import { Content, SocialMediaLinks } from '~/components'

const FooterContainer = styled('footer', {
  padding: '2rem 0',
})

const CopyrightAndSocial = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column-reverse',
  '@tablet': {
    flexDirection: 'row',
  },
})

const FollowSocial = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@tablet': {
    alignItems: 'flex-start',
  },
  '@desktop': {
    gap: '1rem',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

/**
 * Footer
 */
export const Footer = () => {
  let date = new Date()
  let year = date.getFullYear()

  return (
    <FooterContainer>
      <Content>
        <CopyrightAndSocial>
          <div>
            <p>&copy; {year} Kontenbase</p>
          </div>

          <FollowSocial>
            <span>Follow us on</span>
            <SocialMediaLinks />
          </FollowSocial>
        </CopyrightAndSocial>
      </Content>
    </FooterContainer>
  )
}
