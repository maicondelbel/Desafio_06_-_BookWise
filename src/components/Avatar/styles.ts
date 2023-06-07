import { styled } from '@/styles/stitches.config'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

export const AvatarRoot = styled(AvatarPrimitive.Root, {
  borderRadius: '$full',
  background: '$gradient-vertical',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  border: '2px solid transparent',

  variants: {
    size: {
      medium: {
        height: '2.5rem',
        width: '2.5rem',
      },

      large: {
        height: '4.5rem',
        width: '4.5rem',
      },
    },
  },
})

export const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
  userSelect: 'none',
})

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray700',
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$bold',
})
