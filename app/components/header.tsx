import { Content, Navigation, NavigationMenu } from '~/components'
import { styled } from '~/stitches'

const HeaderContainer = styled('header', {
  zIndex: '$sticky',
  position: 'fixed',
  backgroundColor: '$background1',
  borderBottom: '1px solid $background6',
  top: '0',
  left: '0',
  width: '100%',
  padding: '0.5rem 0',
  '@tablet': { padding: '1rem 0' },
})

const ShowBelowMobile = styled('div', {
  display: 'flex',
  '@desktop': { display: 'none' },
})

const ShowAboveMobile = styled('div', {
  display: 'none',
  '@desktop': { display: 'flex' },
})

/**
 * Header
 */
export const Header = () => (
  <HeaderContainer>
    <Content>
      <ShowBelowMobile>
        <NavigationMenu />
      </ShowBelowMobile>
      <ShowAboveMobile>
        <Navigation />
      </ShowAboveMobile>
    </Content>
  </HeaderContainer>
)
