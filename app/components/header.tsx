import { Link } from 'remix'

import { styled } from '~/stitches'
import { Content, Anchor, Logo } from '~/components'

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

const NavigationContainer = styled('nav', {
  ul: {
    display: 'flex',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    fontWeight: 'bold',
    gap: '0.5rem',
    fontSize: '$navlink1',
    '@tablet': { gap: '0.75rem', fontSize: '$navlink2' },
    '@desktop': { gap: '1rem', fontSize: '$navlink3' },
    li: {
      a: {
        padding: '0.5rem',
        color: '$accent9',
      },
    },
  },
})

export const Navigation = () => {
  return (
    <NavigationContainer aria-label="Main navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Anchor href="https://app.kontenbase.com/login">Login</Anchor>
        </li>
        <li>
          <Anchor href="https://a.kontenbase.com/jobs">Jobs</Anchor>
        </li>
      </ul>
    </NavigationContainer>
  )
}
