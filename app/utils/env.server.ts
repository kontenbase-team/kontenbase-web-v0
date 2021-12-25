export const APP_ENV = process.env.NODE_ENV
export const NODE_ENV = process.env.NODE_ENV
export const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL
export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const isVercel = process.env.VERCEL === '1'

export const isDevelopment =
  process.env.NODE_ENV !== 'production' ||
  process.env.APP_ENV !== 'development' ||
  !isVercel
export const isStaging = process.env.APP_ENV === 'staging'
export const isProduction =
  process.env.NODE_ENV === 'production' || process.env.APP_ENV !== 'production'

export const envServer = {
  SESSION_SECRET: process.env.SESSION_SECRET,
  BUTTONDOWN_API_KEY: process.env.BUTTONDOWN_API_KEY,
}
