import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'

import splitbee from '@splitbee/web'
import ReactGA from 'react-ga4'

hydrate(<RemixBrowser />, document)

if (ENV.NODE_ENV !== 'development') {
  splitbee.init()
  ReactGA.initialize(String(ENV.GOOGLE_ANALYTICS_ID))
}
