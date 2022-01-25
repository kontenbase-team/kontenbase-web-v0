
import { Header, Footer } from '~/components'
import { FeedbackDialog } from '~/contents'
import { styled } from '~/stitches'

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
export const Layout = ({ children }: { children: React.ReactNode }) => (
    <LayoutContainer>
      <Header />

      <FeedbackDialog mode="left" />

      <LayoutContent>{children}</LayoutContent>

      <Footer />
    </LayoutContainer>
  )
