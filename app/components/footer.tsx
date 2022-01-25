import { Content, SocialMediaLinks } from '~/components'
import { styled } from '~/stitches'
import { getDayName, getYear } from '~/utils'

const FooterContainer = styled('footer', {
  padding: '2rem 0',
  mt: '$28',
})

const CopyrightSocial = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  flexDirection: 'column-reverse',
  gap: '2rem',
  fontSize: '$2',
  textAlign: 'center',
  '@tablet': {
    flexDirection: 'row',
    fontSize: '$3',
    textAlign: 'left',
  },
  '@desktop': {
    alignItems: 'center',
  },
})

const CopyrightGreeting = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',

  p: { margin: 0 },
  '@tablet': {
    alignItems: 'flex-start',
  },
  '@desktop': {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const Social = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
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
export const Footer = () => (
    <FooterContainer>
      <Content>
        <CopyrightSocial>
          <CopyrightGreeting>
            <p>Copyright &copy; {getYear()} Kontenbase.</p>
            <p>Happy {getDayName()}!</p>
          </CopyrightGreeting>

          <Social>
            <span>Follow us on</span>
            <SocialMediaLinks />
          </Social>
        </CopyrightSocial>
      </Content>
    </FooterContainer>
  )
