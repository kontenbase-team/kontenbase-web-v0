import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'
import splitbee from '@splitbee/web'

hydrate(<RemixBrowser />, document)

if (ENV.NODE_ENV !== 'development') {
  splitbee.init()
}
