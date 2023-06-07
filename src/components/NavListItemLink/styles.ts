import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const NavLinkContainer = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  textDecoration: 'none',
  fontWeight: '$bold',
  color: '$gray400',
  lineHeight: '$base',
  minHeight: '2.5rem',
  transition: 'all 0.2s',
  position: 'relative',

  '&:hover': {
    color: '$gray100',
  },

  '&::before': {
    content: '',
    width: '0.25rem',
    height: '1.5rem',
    background: '$gradient-vertical',
    borderRadius: '$full',
    transition: '0.2s',
    opacity: 0,
    marginRight: '$1',
    position: 'absolute',
    left: '-1rem',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        '&::before': {
          opacity: 1,
        },
      },
    },
  },
})
