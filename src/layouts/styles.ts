import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  margin: '$5',
})

export const Section = styled('section', {
  position: 'sticky',
  top: '$5',
  height: 'calc(100vh - 2.5rem)',
  backgroundImage: 'url(/header-background-image.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '$md',
  minWidth: '14.5rem',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    margin: '1rem 0',
  },

  '@sm': {
    width: 'auto',
    minWidth: 'auto',
  },
})

export const FullLogoBox = styled('div', {
  '@sm': {
    display: 'none',
  },
})

export const IconLogoBox = styled('div', {
  display: 'none',

  '@sm': {
    display: 'block',
  },
})

export const MainContainer = styled('main', {
  margin: '$5 auto',
  paddingLeft: '$5',
  maxWidth: '75.25rem',
  flex: '1',
  position: 'relative',
  // overflow: 'auto',
  // height: 'calc(100vh - 40px)',
})

export const Navbar = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  marginTop: '3rem',
})

export const NavList = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const NavListItem = styled('li', {
  maxHeight: '2.5rem',

  '@sm': {
    span: {
      display: 'none',
    },
  },
})

export const LoginButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  fontWeight: '$bold',
  color: '$gray100',
  height: '1.875rem',
  cursor: 'pointer',
  width: 'fit-content',

  svg: {
    color: '$green100',
  },

  '@sm': {
    span: {
      display: 'none',
    },
  },
})

export const LogoutBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    color: '$red200',
  },

  button: {
    height: '1.25rem',
    width: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },

  '@sm': {
    flexDirection: 'column',
  },
})

export const FirstName = styled('span', {
  '@sm': {
    display: 'none',
  },
})
