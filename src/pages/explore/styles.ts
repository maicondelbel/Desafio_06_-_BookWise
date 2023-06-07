import { styled } from '@/styles/stitches.config'

export const PageSection = styled('section', {})

export const BooksGrid = styled('div', {
  marginTop: '3rem',
  display: 'grid',
  justifyItems: 'center',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$5',

  '@xl': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@xs': {
    gridTemplateColumns: '1fr',
  },
})

export const CategoryFilterBox = styled('div', {
  display: 'flex',
  flexFlow: 'wrap',
  gap: '$3',
})

export const InputFinderBox = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: '27rem',

  '@sm': {
    maxWidth: 'none',
  },
})
