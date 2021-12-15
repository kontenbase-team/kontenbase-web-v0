import { styled } from '~/stitches'

import { Content, SocialMediaLinks } from '~/components'
import { getDayName, getYear } from '~/utils'

const FooterContainer = styled('footer', {
  padding: '2rem 0',
})

const CopyrightAndSocial = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column-reverse',
  gap: '2rem',
  '@tablet': {
    flexDirection: 'row',
  },
  '@desktop': {
    alignItems: 'center',
  },
})

const Copyright = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: {
    margin: 0,
  },
  '@tablet': {
    alignItems: 'flex-start',
  },
  '@desktop': {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
  },
})

const Social = styled('div', {
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
  return (
    <FooterContainer>
      <Content>
        <CopyrightAndSocial>
          <Copyright>
            <p>&copy; {getYear()} Kontenbase.</p>
            <p>Happy {getDayName()}!</p>
          </Copyright>

          <Social>
            <span>Follow us on</span>
            <SocialMediaLinks />
          </Social>
        </CopyrightAndSocial>
      </Content>
    </FooterContainer>
  )
}
