import { styled } from '~/stitches'

import { Content, SocialMediaLinks } from '~/components'

const FooterContainer = styled('footer', {
  padding: '2rem 0',
})

const CopyrightAndSocial = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
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

          <div>
            <span>Follow us on</span>
            <SocialMediaLinks />
          </div>
        </CopyrightAndSocial>
      </Content>
    </FooterContainer>
  )
}
