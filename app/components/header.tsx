import { Link } from 'remix'

import { Content, Anchor, Logo } from '~/components'

/**
 * Header
 */
export const Header = () => {
  return (
    <header>
      <Content>
        <Link to="/" title="Remix">
          <Logo />
        </Link>

        <nav aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Anchor href="https://a.kontenbase.com/jobs">Jobs</Anchor>
            </li>
          </ul>
        </nav>
      </Content>
    </header>
  )
}
