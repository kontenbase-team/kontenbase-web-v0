import * as Collapsible from '@radix-ui/react-collapsible'
import { Link } from 'remix'

import { ButtonToggleTheme, Logo } from '~/components'
import { styled } from '~/stitches'
import { buttonStyles } from '~/styles'

const MenuContainer = styled('div', {})

const MenuTop = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@desktop': { display: 'none' },
})

const MenuTopGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const MenuButton = styled(Collapsible.Trigger, {
  ...buttonStyles,
  ml: '$3',
})

const MenuBottom = styled(Collapsible.Content, {
  '@desktop': { display: 'none' },
})

const MenuItems = styled('nav', {
  pt: '$5',
})

const MenuItem = styled('div', {
  // width: '100%',
})

const MenuLink = styled(Link, {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  padding: '0.5rem',
  borderRadius: '$2',
  color: '$brand9',
  px: '$2',
  py: '$1',
  '@tablet': { px: '$2', py: '$1' },
  '@desktop': { px: '$3', py: '$2' },
  '&:hover': { backgroundColor: '$brand3' },
})

export const NavigationMenu = () => (
  <MenuContainer>
    <Collapsible.Root>
      <MenuTop>
        <Link to="/" title="Kontenbase">
          <Logo />
        </Link>
        <MenuTopGroup>
          <ButtonToggleTheme />
          <MenuButton size="adaptive">Menu</MenuButton>
        </MenuTopGroup>
      </MenuTop>

      <MenuBottom>
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
      </MenuBottom>
    </Collapsible.Root>
  </MenuContainer>
)

const NavigationContainer = styled('nav', {
  width: '100%',
  justifyContent: 'space-between',
  display: 'none',
  '@desktop': { display: 'flex' },
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
})

const NavigationLink = styled(Link, {
  padding: '0.5rem',
  borderRadius: '$2',
  color: '$brand9',
  px: '$2',
  py: '$1',
  '@tablet': { px: '$2', py: '$1' },
  '@desktop': { px: '$3', py: '$2' },
  '&:hover': { backgroundColor: '$brand3' },
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
      <NavigationItem>
        <NavigationLink to="/">Home</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to="/pricing">Pricing</NavigationLink>
      </NavigationItem>
      <NavigationItem>
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
