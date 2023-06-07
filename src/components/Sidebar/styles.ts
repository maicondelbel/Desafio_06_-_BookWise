import { keyframes, styled } from '@/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

const sidebarOpen = keyframes({
  from: { opacity: 0, transform: 'translateX(100%)' },
  to: { opacity: 1, transform: 'translateX(0%)' },
})

const sidebarClose = keyframes({
  from: { opacity: 1, transform: 'translateX(0%)' },
  to: { opacity: 0, transform: 'translateX(100%)' },
})

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeout = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.6);',
  position: 'fixed',
  inset: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeout} 200ms ease-out`,
  },
})

export const DialogContent = styled(Dialog.Content, {
  fontFamily: '$default',
  backgroundColor: '$gray800',
  padding: '4rem 3rem 0 3rem',
  position: 'fixed',
  top: '0',
  right: '0',
  width: '90vw',
  maxWidth: '666px',
  height: '100vh',
  overflowY: 'scroll',

  '&[data-state="open"]': {
    animation: `${sidebarOpen} 300ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${sidebarClose} 300ms ease-in`,
  },

  '@sm': {
    padding: '3rem 2rem 0 2.5rem',
  },
})

export const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  fontSize: 17,
})

export const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  fontSize: 15,
  lineHeight: 1.5,
})

export const IconButton = styled('button', {
  all: 'unset',
  position: 'absolute',
  top: '1rem',
  right: '2.5rem',
  cursor: 'pointer',
  padding: '$2',
  color: '$gray400',
  lineHeight: '0',

  '@sm': {
    top: '0.25rem',
    right: '1.5rem',
  },
})

export const BookDetailContainer = styled('div', {
  background: '$gray700',
  padding: '1.5rem 2rem 1rem 2rem',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  marginBottom: '2.5rem',
  maxWidth: '35.25rem',
})

export const BookInfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,

  '@xs': {
    textAlign: 'center',
    alignItems: 'center',
  },
})

export const BookTitle = styled('div', {
  marginBottom: '1rem',

  h4: {
    fontSize: '$lg',
    lineHeight: '$short',
    marginBottom: '$2',
  },
  span: {
    fontSize: '$md',
    lineHeight: '$base',
    color: '$gray300',
  },
})

export const Rating = styled('div', {
  div: {
    marginBottom: '$1',
  },
  span: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const BookDetailTop = styled('div', {
  display: 'flex',
  gap: '$8',

  '@xs': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const BookDetailBottom = styled('div', {
  display: 'flex',
  gap: '3.75rem',
  padding: '1.5rem 0',
  borderTop: '1px solid $gray600',

  svg: {
    color: '$green100',
  },

  '@xxs': {
    flexDirection: 'column',
    gap: '1rem',
  },
})

export const AboutBox = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',

  h5: {
    fontSize: '$sm',
    lineHeight: '$base',
    fontWeight: '$regular',
    color: '$gray300',
  },

  span: {
    fontSize: '$md',
    lineHeight: '$short',
    fontWeight: '$bold',
  },
})

export const ReviewSection = styled('div', {
  marginBottom: '2.5rem',

  'article + article': {
    marginTop: '$3',
  },
})

export const ReviewSectionHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$4',

  h2: {
    fontSize: '$sm',
    lineHeight: '2.125rem',
    fontWeight: '$regular',
  },
})

export const Animation = styled('div', {
  overflow: 'hidden',
  transition: 'all 0.4s ease 0s',
  height: '0',

  variants: {
    open: {
      true: {
        height: '372px',
      },
      false: {
        height: '0',
      },
    },
  },
})
