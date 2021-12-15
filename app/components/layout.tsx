import { styled } from '~/stitches'

import { Header, Footer, Anchor, Logo } from '~/components'

const LayoutContainer = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
})

const LayoutContent = styled('div', {
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
