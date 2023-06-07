import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderLeft: '1px solid $gray700',
  position: 'sticky',
  top: '$5',

  '@md': {
    flexDirection: 'row',
    position: 'inherit',
    borderLeft: 'none',
  },

  '@xs': {
    flexDirection: 'column',
  },
})

export const ProfileContainerTop = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
})

export const ProfileDescription = styled('div', {
  marginBottom: '$2',
  textAlign: 'center',

  h2: {
    fontSize: '$xl',
    color: '$gray100',
    lineHeight: '$short',
    fontWeight: '$bold',
  },

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const ProfileContainerBottom = styled('div', {
  paddingTop: '$5',
  paddingBottom: '$5',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  flex: 1,

  '@md': {
    gap: '$5',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
})

export const IconBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    color: '$green100',
  },
})

export const IconBoxDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h3: {
    color: '$gray200',
    fontSize: '$md',
    lineHeight: '$short',
  },

  span: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const Separator = styled('hr', {
  marginTop: '$8',
  marginBottom: '$8',
  height: '0.25rem',
  width: '2rem',
  background: '$gradient-horizontal',
  borderRadius: '$full',

  '@md': {
    transform: 'rotate(90deg)',
    margin: '0 1.5rem',
  },

  '@xs': {
    margin: '1.5rem 0',
    transform: 'inherit',
  },
})
