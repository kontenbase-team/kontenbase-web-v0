import { styled } from '~/stitches'

import { Header, Footer, Anchor, Logo } from '~/components'

const LayoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  // minHeight: 'calc(100vh - env(safe-area-inset-bottom))',
})

const LayoutContent = styled('main', {
  paddingTop: '2rem',
  flex: 1,
})

/**
 * Layout
 */
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <Header />

      <LayoutContent>{children}</LayoutContent>

      <Footer />
    </LayoutContainer>
  )
}
