import * as Collapsible from '@radix-ui/react-collapsible'
import { Link } from 'remix'

import { ButtonToggleTheme, Logo } from '~/components'
import { navigationData } from '~/data'
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
          {navigationData.map((item) => (
            <MenuItem key={item.to}>
              <MenuLink to={item.to}>{item.text}</MenuLink>
            </MenuItem>
          ))}
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
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0',
  margin: '0',
  fontWeight: 'bold',
  fontSize: '$3',
  flexWrap: 'wrap',
  gap: '0.2rem',
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
      {navigationData.map((item) => (
        <NavigationItem key={item.to}>
          <NavigationLink to={item.to}>{item.text}</NavigationLink>
        </NavigationItem>
      ))}
    </NavigationList>
  </NavigationContainer>
)
