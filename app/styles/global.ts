import { globalCss } from '~/stitches'

export const globalStyles = globalCss({
  html: {
    overflowX: 'hidden',
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
  },

  body: {
    backgroundColor: '$background1',
    color: '$text4',
    padding: '0',
    margin: '0',
    lineHeight: '1.5',
    fontFamily: `-apple-system, 'Segoe UI', Helvetica Neue, Helvetica, Roboto,
    Arial, sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji'`,
  },

  a: {
    color: '$blue9',
    textDecoration: 'none',
    '&:hover': {
      color: '$blue10',
      textDecoration: 'underline',
    },
  },

  hr: {
    display: 'block',
    height: '1px',
    border: '0',
    backgroundColor: 'var(--color-border)',
    marginTop: '2rem',
    marginBottom: '2rem',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$accent4',
  },

  ':-moz-focusring': {
    outline: 'auto',
  },

  ':focus': {
    outline: '$blue9 dotted 2px',
    outlineOffset: '2px',
  },
})
