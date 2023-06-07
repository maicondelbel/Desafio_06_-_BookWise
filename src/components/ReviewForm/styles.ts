import { styled } from '@/styles/stitches.config'

export const ReviewFormContainer = styled('form', {
  padding: '$6',
  background: '$gray700',
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  marginBottom: '$6',

  variants: {
    isSubmiting: {
      true: {
        opacity: '0.4',
      },
    },
  },
})

export const ReviewFormContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const ReviewFormActionsBox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  div: {
    gap: '$2',
    display: 'flex',
  },
})

export const ErrorBox = styled('div', {
  span: {
    fontSize: '$xs',
    color: '$red',
  },
})

export const ActionButton = styled('button', {
  display: 'flex',
  padding: '$2',
  justifyContent: 'flex-end',
  gap: '$2',
  background: '$gray600',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'all 0.2s',

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      send: {
        color: '$green100',
      },
      cancel: {
        color: '$purple100',
      },
    },
  },
})
