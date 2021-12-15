import { styled } from '~/stitches'

import { Content } from '~/components'

const FooterContainer = styled('footer', {})
const CopyrightAndSocial = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

/**
 * Footer
 */
export const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <CopyrightAndSocial>
          <div>
            <p>&copy; 2021 Kontenbase</p>
          </div>

          <div>
            <span>Follow us</span>
          </div>
        </CopyrightAndSocial>
      </Content>
    </FooterContainer>
  )
}
