/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  json,
  useLoaderData,
  ScrollRestoration,
  useCatch,
} from 'remix'

import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix'
import { Layout } from '~/components'
import { lightTheme, darkTheme } from '~/stitches'
import { globalStyles } from '~/styles'
import { getEnv } from '~/utils/env.server'
import {
  useTheme,
  ThemeProvider,
  Theme,
  NonFlashOfWrongThemeEls,
} from '~/utils/theme'
import { getThemeSession } from '~/utils/theme.server'

import carouselUrl from '~/styles/carousel.css'
import darkStylesUrl from '~/styles/dark.css'
import globalStylesUrl from '~/styles/global.css'

/**
 * Loader
 */
export type LoaderData = {
  theme: Theme | null
  ENV: ReturnType<typeof getEnv>
}

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request)
  const data: LoaderData = {
    theme: themeSession.getTheme(),
    ENV: getEnv(),
  }

  return json(data)
}

/**
 * Meta
 */
export const meta: MetaFunction = () => {
  const name = 'Kontenbase'
  const title = 'Kontenbase'
  const description =
    'No code backend API, fast and easy! Easily create backend API, auth, and storage in less than 1 minute without coding.'
  const url = 'https://kontenbase.com/'
  const ogImageUrl = `${url}images/kontenbase-og.png?v=1`
  const ogImageAlt = 'Kontenbase is a No Code Backend as a Service'
  const twiterImageUrl = `${url}images/kontenbase-twitter.png?v=1`

  return {
    title,
    description,

    'og:site_name': name,
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:locale': 'en_US',
    'og:image': ogImageUrl,
    'og:image:alt': ogImageAlt,
    'og:type': 'website',

    'twitter:card': 'summary_large_image',
    'twitter:site': '@kontenbase',
    'twitter:creator': '@kontenbase',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': twiterImageUrl,
  }
}

/**
 * Links
 * https://remix.run/api/app#links
 */
export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: globalStylesUrl,
  },
  {
    rel: 'stylesheet',
    href: darkStylesUrl,
    media: '(prefers-color-scheme: dark)',
  },
  {
    rel: 'stylesheet',
    href: carouselUrl,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/icons/apple-touch-icon.png?v=1',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/icons/favicon-32x32.png?v=1',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/icons/favicon-16x16.png?v=1',
  },
  {
    rel: 'mask-icon',
    href: '/icons/safari-pinned-tab.svg?v=1',
    color: '#05a2c2',
  },
  { rel: 'shortcut icon', href: '/icons/favicon.ico?v=1' },
  { rel: 'manifest', href: '/icons/site.webmanifest?v=1' },
]

/**
 * App
 *
 * https://remix.run/api/conventions#default-export
 * https://remix.run/api/conventions#route-filenames
 */

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

/**
 * Error Boundary
 *
 * https://remix.run/docs/en/v1/api/conventions#errorboundary
 */
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <div>
      <h1>There was an error</h1>
      <p>{error.message}</p>
      <hr />
      <p>Sorry, there is an error. Please try again or refresh the page.</p>
    </div>
  )
}

/**
 * Catch Boundary
 *
 * https://remix.run/docs/en/v1/api/conventions#catchboundary
 */
export function CatchBoundary() {
  const caught = useCatch()
  let message

  switch (caught.status) {
    case 401:
      message = (
        <p>
          Sorry, looks like you tried to visit a page that you don't have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p> Sorry, looks like you tried to visit a page that doesn't exist.</p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <div>
      <h1>
        {caught.status}: {caught.statusText}
      </h1>
      <p>{message}</p>
    </div>
  )
}

/**
 * Document
 */
function Document({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  globalStyles()
  const data = useLoaderData<LoaderData>()

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
        </head>

        <DocumentBody>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data.ENV)};`,
            }}
          />
          {children}
        </DocumentBody>
      </html>
    </ThemeProvider>
  )
}

const DocumentBody = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useTheme()

  return (
    <body className={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === 'development' && <LiveReload />}
    </body>
  )
}
