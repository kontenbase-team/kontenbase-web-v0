import { Link } from 'remix'

import { Header, Footer, Anchor, Logo } from '~/components'

/**
 * Layout
 */
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />

      <div>
        <div>{children}</div>
      </div>

      <Footer />
    </div>
  )
}
