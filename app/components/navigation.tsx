import * as Collapsible from '@radix-ui/react-collapsible'
import { Link } from 'remix'

import { ButtonToggleTheme, Logo } from '~/components'
import { styled } from '~/stitches'

const MenuContainer = styled('div', {})

const MenuTop = styled('div', {
  display: 'flex',
})

const MenuItems = styled('div', {})

const MenuItem = styled('div', {})

const MenuLink = styled(Link, {})

export const NavigationMenu = () => (
  <MenuContainer>
    <Collapsible.Root>
      <MenuTop>
        <Link to="/" title="Kontenbase">
          <Logo />
        </Link>
        <Collapsible.Trigger>
          <span>Menu</span>
        </Collapsible.Trigger>
      </MenuTop>

      <Collapsible.Content>
        <MenuItems>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/pricing">Pricing</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/blog">Blog</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/docs">Docs</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/jobs">Jobs</MenuLink>
          </MenuItem>
        </MenuItems>
      </Collapsible.Content>
    </Collapsible.Root>
  </MenuContainer>
)

const NavigationContainer = styled('nav', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
})

const NavigationList = styled('ul', {
  display: 'flex',
  listStyleType: 'none',
  alignItems: 'center',
  padding: '0',
  margin: '0',
  fontWeight: 'bold',
  fontSize: '$3',
  gap: '0.1rem',
  '@tablet': { gap: '0.5rem' },
  '@desktop': { gap: '0.75rem' },
})

const NavigationItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  variants: {
    visible: {
      tablet: {
        display: 'none',
        '@tablet': {
          display: 'flex',
        },
      },
    },
  },
})

const navigationItemChildStyles = {
  padding: '0.5rem',
  borderRadius: '$2',
  color: '$brand9',
  px: '$2',
  py: '$1',
  '@tablet': { px: '$2', py: '$1' },
  '@desktop': { px: '$3', py: '$2' },
  '&:hover': {
    backgroundColor: '$brand3',
  },
}

const NavigationLink = styled(Link, {
  ...navigationItemChildStyles,
})

export const Navigation = () => (
  <NavigationContainer aria-label="Main navigation">
    <Link to="/" title="Kontenbase">
      <Logo />
    </Link>
    <NavigationList>
      <NavigationItem>
        <ButtonToggleTheme />
      </NavigationItem>
      <NavigationItem visible="tablet">
        <NavigationLink to="/">Home</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to="/pricing">Pricing</NavigationLink>
      </NavigationItem>
      <NavigationItem visible="tablet">
        <NavigationLink to="/blog">Blog</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to="/docs">Docs</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to="/jobs">Jobs</NavigationLink>
      </NavigationItem>
      {/* <NavigationItem>
        <AnchorButton variant="brand" href="https://app.kontenbase.com">
          Login
        </AnchorButton>
      </NavigationItem> */}
    </NavigationList>
  </NavigationContainer>
)
