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
    color: '$text1',
    padding: '0',
    margin: '0',
    lineHeight: '1.5',
    fontFamily: `-apple-system, 'Segoe UI', Helvetica Neue, Helvetica, Roboto,
    Arial, sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji'`,
  },

  a: {
    textDecoration: 'none',
    color: '$text',
    // color: '$brand9',
    // '&:hover': { color: '$brand10' },
  },

  hr: {
    display: 'block',
    height: '1px',
    border: '0',
    backgroundColor: 'var(--color-border)',
    marginTop: '2rem',
    marginBottom: '2rem',
  },

  img: {
    userSelect: 'none',
  },

  svg: {
    display: 'block',
  },

  'pre, code': {
    margin: 0,
    fontFamily: '$mono',
  },

  '::selection': {
    backgroundColor: '$brand4',
  },

  ':-moz-focusring': {
    outline: 'none',
    '@tablet': {
      outline: 'auto',
    },
  },

  ':focus': {
    outline: 'none',
    '@tablet': {
      outline: '$blue9 solid 2px',
      outlineOffset: '1px',
    },
  },
})
