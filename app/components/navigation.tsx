import * as Collapsible from '@radix-ui/react-collapsible'
import { Link } from 'remix'

import { styled } from '~/stitches'

const MenuContainer = styled('div', {})

const MenuItems = styled('div', {})

const MenuItem = styled('div', {})

const MenuLink = styled(Link, {})

export const NavigationMenu = () => (
  <MenuContainer>
    <Collapsible.Root>
      <Collapsible.Trigger>
        <span>Menu</span>
      </Collapsible.Trigger>
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
