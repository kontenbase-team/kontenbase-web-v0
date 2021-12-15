import { createCookieSessionStorage } from 'remix'

import { Theme, isTheme } from './theme'

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'kontenbase_theme',
    sameSite: 'lax',
    path: '/',
    expires: new Date('2100-10-18'),
    httpOnly: true,
  },
})

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'))

  return {
    getTheme: () => {
      const themeValue = session.get('theme')
      return isTheme(themeValue) ? themeValue : Theme.DARK
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  }
}

export { getThemeSession }
