import { Link } from 'remix'

import { styled } from '~/stitches'
import { Content, Anchor, AnchorButton, Button, Logo } from '~/components'

const HeaderContainer = styled('header', {
  padding: '1rem 0',
  position: 'fixed',
  backgroundColor: '$background1',
  borderBottom: '1px solid $background6',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: '9999',
})

const LogoNavigation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

/**
 * Header
 */
export const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <LogoNavigation>
          <Link to="/" title="Kontenbase">
            <Logo />
          </Link>
          <Navigation />
        </LogoNavigation>
      </Content>
    </HeaderContainer>
  )
}

const NavigationContainer = styled('nav', {})

const NavigationList = styled('ul', {
  display: 'flex',
  listStyleType: 'none',
  alignItems: 'center',
  padding: '0',
  margin: '0',
  fontWeight: 'bold',
  gap: '0.5rem',
  fontSize: '$navlink1',
  '@tablet': { gap: '0.75rem', fontSize: '$navlink2' },
  '@desktop': { gap: '1rem', fontSize: '$navlink3' },
})

const NavigationItem = styled('li', {})

const NavigationLink = styled(Link, {
  padding: '0.5rem',
  borderRadius: '$2',
  color: '$brand9',
  '&:hover': {
    backgroundColor: '$brand3',
  },
})

const NavigationAnchor = styled(Anchor, {
  padding: '0.5rem',
  borderRadius: '$2',
  color: '$brand9',
  '&:hover': {
    backgroundColor: '$brand3',
  },
})

export const Navigation = () => {
  return (
    <NavigationContainer aria-label="Main navigation">
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationAnchor href="https://a.kontenbase.com/jobs">
            Jobs
          </NavigationAnchor>
        </NavigationItem>

        <NavigationItem>
          <AnchorButton variant="brand" href="https://app.kontenbase.com/login">
            Login
          </AnchorButton>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  )
}
