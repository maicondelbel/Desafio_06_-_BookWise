import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const LinkContainer = styled(Link, {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  padding: '$1 $2',
  textDecoration: 'none',
  transition: 'all 0.2s',

  '&:hover': {
    background: 'rgba(131, 129, 217, 0.06)',
    borderRadius: '4px',
  },

  variants: {
    size: {
      medium: {
        height: '2.125rem',
        lineHeight: '$base',
        fontSize: '$md',
        fontWeight: '$bold',

        svg: {
          width: '1.25rem',
          height: '1.25rem',
        },
      },
      small: {
        height: '1.875rem',
        lineHeight: '$base',
        fontSize: '$sm',
        fontWeight: '$bold',

        svg: {
          width: '1rem',
          height: '1rem',
        },
      },
    },
    variant: {
      purple: {
        color: '$purple100',
      },
      white: {
        color: '$white200',
      },
    },
  },
})
