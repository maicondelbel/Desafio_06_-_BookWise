import { styled } from '@/styles/stitches.config'

export const PageHeaderContainer = styled('header', {
  marginTop: '3.25rem',
  marginBottom: '2.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',

  svg: {
    color: '$green100',
    height: '2rem',
    width: '2rem',
  },

  h1: {
    lineHeight: '$short',
    fontSize: '$2xl',
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    height: '2.125rem',
  },

  '@sm': {
    flexDirection: 'column',
  },
})
