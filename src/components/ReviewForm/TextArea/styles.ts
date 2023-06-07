import { styled } from '@/styles/stitches.config'

export const TextAreaContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flex: '1',
  background: '$gray800',
  borderRadius: '4px',

  span: {
    position: 'absolute',
    display: 'block',
    color: '#7C7C8A',
    fontSize: '$xs',
    bottom: '$1',
    right: '$2',
    lineHeight: '$base',
  },

  textarea: {
    fontFamily: 'inherit',
    borderRadius: '4px',
    padding: '0.875rem 1.25rem 1.75rem 1.25rem',
    width: '100%',
    color: '$gray200',
    border: '1px solid $gray700',
    background: 'transparent',
    fontSize: '0.875rem',
    resize: 'none',
    minHeight: '11.25rem',
    outline: 'none',

    '&:focus': {
      border: '1px solid $green200',
    },
  },

  variants: {
    hasError: {
      true: {
        '& textarea': {
          outline: '1px solid $red',
        },
      },
    },
  },
})
