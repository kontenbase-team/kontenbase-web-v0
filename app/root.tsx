import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  json,
  useLoaderData,
  LoaderFunction,
  ScrollRestoration,
  useCatch,
} from 'remix'
import type { LinksFunction } from 'remix'

import globalStylesUrl from '~/styles/global.css'
import darkStylesUrl from '~/styles/dark.css'

import {
  useTheme,
  ThemeProvider,
  Theme,
  NonFlashOfWrongThemeEls,
} from '~/utils/theme'
import { getThemeSession } from '~/utils/theme.server'
import { theme, darkTheme, getCssText } from '~/stitches'
import { Layout } from '~/components'

/**
 * Loader
 */
export type LoaderData = {
  theme: Theme | null
}

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request)

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  }

  return json(data)
}

/**
 * Links
 * https://remix.run/api/app#links
 */
export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStylesUrl },
    {
      rel: 'stylesheet',
      href: darkStylesUrl,
      media: '(prefers-color-scheme: dark)',
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
}

/**
 * App
 *
 * https://remix.run/api/conventions#default-export
 * https://remix.run/api/conventions#route-filenames
 */
export default function App() {
  const data = useLoaderData<LoaderData>()

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <Document>
        <Layout>
          <Outlet />
        </Layout>
      </Document>
    </ThemeProvider>
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
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  )
}

/**
 * Catch Boundary
 *
 * https://remix.run/docs/en/v1/api/conventions#catchboundary
 */
export function CatchBoundary() {
  let caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  )
}

/**
 * Document
 */
function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const [whatTheme] = useTheme()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <Meta />
        <Links />
      </head>

      <body
        className={
          whatTheme === 'light' ? theme.className : darkTheme.className
        }
      >
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
