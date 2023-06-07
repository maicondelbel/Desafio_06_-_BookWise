import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  h1: {
    color: '$gray100',
    fontWeight: 700,
    lineHeight: '$short',
    fontSize: '$2xl',
  },

  button: {
    all: 'unset',
    boxSizing: 'border-box',
  },

  '::-webkit-scrollbar-track': {
    background: '$gray700',
    borderRadius: '$full',
  },

  '::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: '$full',
  },

  '::-webkit-scrollbar': {
    width: '6px',
  },
})
