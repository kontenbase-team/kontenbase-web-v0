import { styled } from '~/stitches'

import { Header, Footer } from '~/components'
import { Feedback } from '~/contents'

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

      <Feedback />
      <LayoutContent>{children}</LayoutContent>

      <Footer />
    </LayoutContainer>
  )
}
