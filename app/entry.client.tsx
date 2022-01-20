/* eslint-disable no-undef */
import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'

import { splitbee, ReactGA } from '~/utils'

hydrate(<RemixBrowser />, document)

if (ENV.NODE_ENV !== 'development') {
  splitbee.init()
  ReactGA.initialize(String(ENV.GOOGLE_ANALYTICS_ID))
}
