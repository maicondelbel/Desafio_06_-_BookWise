import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  padding: '$5',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  gap: '$10',

  '@sm': {
    flexDirection: 'column',
  },
})

export const Aside = styled('aside', {
  backgroundImage: 'url(/login-background-image.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  width: '37.375rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$md',

  '@sm': {
    width: 'auto',
    height: '10rem',
  },
})

export const Section = styled('main', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '@sm': {
    justifyContent: 'flex-start',
  },
})

export const LoginBox = styled('div', {
  p: {
    lineHeight: '$base',
  },

  div: {
    marginTop: '$10',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    minWidth: '23.25rem',

    '@sm': {
      minWidth: '27.5rem',
    },

    '@xxs': {
      minWidth: '100%',
    },
  },

  '@sm': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
})

export const LoginButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  padding: '$5 $6',
  color: '$gray200',
  background: '$gray600',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  transition: 'all 0.3s',
  fontSize: '$lg',
  fontWeight: '$bold',

  '&:hover': {
    background: '$gray500',
  },
})
