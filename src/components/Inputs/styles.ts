import { styled } from '@/styles/stitches.config'

export const InputContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  background: '$gray800',
  borderRadius: '4px',
  width: '100%',

  input: {
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
    borderRadius: '4px',
    padding: '0.875rem 3rem 0.875rem 1.25rem',
    width: '100%',
    color: '$gray200',
    border: '1px solid $gray500',
    background: 'transparent',
    fontSize: '0.875rem',
    outline: 'none',

    '&::placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      border: '1px solid $green200',
    },
  },

  svg: {
    color: '$gray500',
    position: 'absolute',
    right: '1.25rem',
    top: '0.875rem',
    height: '1.25rem',
    width: '1.25rem',
  },

  '&:focus-within': {
    svg: {
      color: '$green200',
    },
  },
})
