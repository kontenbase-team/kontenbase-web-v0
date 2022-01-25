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
  padding: '1rem 0',
})

/**
 * Header
 */
export const Header = () => (
  <HeaderContainer>
    <Content>
      <NavigationMenu />
      <Navigation />
    </Content>
  </HeaderContainer>
)
