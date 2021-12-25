import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'
import splitbee from '@splitbee/web'

hydrate(<RemixBrowser />, document)

splitbee.init()
