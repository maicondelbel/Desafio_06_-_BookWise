import { styled } from '@/styles/stitches.config'

export const TagContainer = styled('button', {
  fontSize: '$md',
  lineHeight: '$base',
  borderRadius: '$full',
  padding: '$1 $4',
  border: '1px solid $purple100',
  color: '$purple100',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  height: '2.125rem',

  '&:hover': {
    background: '$purple200',
    color: '$white',
  },

  variants: {
    active: {
      true: {
        background: '$purple200',
        border: '1px solid $purple200',
        color: '$white',
      },
    },
  },
})
