import { Link } from 'remix'

import { styled } from '~/stitches'
import {
  Anchor,
  AnchorButton,
  ButtonToggleTheme,
  Content,
  Logo,
} from '~/components'

const HeaderContainer = styled('header', {
  position: 'fixed',
  backgroundColor: '$background1',
  borderBottom: '1px solid $background6',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: '9999',
  padding: '0.5rem 0',
  '@tablet': {
    padding: '1rem 0',
  },
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
  fontSize: '$3',
  gap: '0.5rem',
  '@tablet': { gap: '0.75rem' },
  '@desktop': { gap: '1rem' },
})

const NavigationItem = styled('li', {
  variants: {
    visible: {
      tablet: {
        display: 'none',
        '@tablet': {
          display: 'block',
        },
      },
    },
  },
})

const navigationItemChildStyles = {
  padding: '0.5rem',
  borderRadius: '$2',
  color: '$brand9',
  py: '$2',
  px: '$3',
  '&:hover': {
    backgroundColor: '$brand3',
  },
}

const NavigationLink = styled(Link, {
  ...navigationItemChildStyles,
})

const NavigationAnchor = styled(Anchor, {
  ...navigationItemChildStyles,
})

export const Navigation = () => {
  return (
    <NavigationContainer aria-label="Main navigation">
      <NavigationList>
        <NavigationItem>
          <ButtonToggleTheme />
        </NavigationItem>

        <NavigationItem visible="tablet">
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationAnchor href="https://a.kontenbase.com/jobs">
            Jobs
          </NavigationAnchor>
        </NavigationItem>

        {/* <NavigationItem>
          <AnchorButton variant="brand" href="https://app.kontenbase.com/login">
            Login
          </AnchorButton>
        </NavigationItem> */}
      </NavigationList>
    </NavigationContainer>
  )
}
