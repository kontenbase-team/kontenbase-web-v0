import { styled } from '~/stitches'

import { Header, Footer, Anchor, Logo } from '~/components'

const LayoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // minHeight: '100vh',
  minHeight: 'calc(100vh - env(safe-area-inset-bottom))',
})

const LayoutContent = styled('div', {
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

      <LayoutContent>
        <div>{children}</div>
      </LayoutContent>

      <Footer />
    </LayoutContainer>
  )
}
