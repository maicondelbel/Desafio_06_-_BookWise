import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
})

export const Section = styled('section', {
  height: 'calc(100vh - 2.5rem)',
  backgroundImage: 'url(/header-background-image.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '$md',
  width: '14.5rem',
  margin: '$5',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    margin: '1rem 0',
  },
})

export const MainContainer = styled('main', {
  flex: '1',
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

export const NavListItem = styled('li', {})

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
})

export const SectionContainer = styled('section', {
  display: 'flex',
  gap: '2rem',

  h2: {
    fontSize: '$sm',
    lineHeight: '$base',
    fontWeight: '$regular',
  },

  '@md': {
    flexDirection: 'column-reverse',
  },
})

export const MainSection = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const RightSideSection = styled('div', {
  width: '20.25rem',

  '@md': {
    // width: 'auto',
    display: 'none',
  },
})

export const RightSideInner = styled('div', {
  position: 'sticky',
  top: '$5',
})

export const SectionHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const RightSideSectionContent = styled('div', {
  marginTop: '$4',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
