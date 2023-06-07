import { keyframes, styled } from '@/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

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
  backgroundColor: '$gray700',
  padding: '3.5rem 4.5rem',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '32.25rem',
  borderRadius: '12px',

  '&[data-state="open"]': {
    animation: `${fadeIn} 300ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeout} 300ms ease-in`,
  },

  '@xs': {
    padding: '3rem 2.5rem',
  },
})

export const DialogTitle = styled(Dialog.Title, {
  textAlign: 'center',
  margin: 0,
  fontWeight: 700,
  fontSize: '$lg',
})

export const DialogDescription = styled(Dialog.Description, {
  margin: '2.5rem auto 0 auto',
  fontSize: 15,
  lineHeight: 1.5,
})

export const LoginBox = styled('div', {
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  gap: '$4',
  maxWidth: '23.25rem',
})

export const IconButton = styled('button', {
  all: 'unset',
  position: 'absolute',
  top: '$2',
  right: '$2',
  cursor: 'pointer',
  padding: '$2',
  color: '$gray400',
})
