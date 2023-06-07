import getInitials from '@/utils/getInitials'
import { AvatarImageProps } from '@radix-ui/react-avatar'
import { AvatarFallback, AvatarImage, AvatarRoot } from './styles'

interface IAvatar extends AvatarImageProps {
  name: string | undefined
  size: 'medium' | 'large'
}

export function Avatar({ name, size, ...props }: IAvatar) {
  const fallback = getInitials(name!)

  return (
    <AvatarRoot size={size}>
      <AvatarImage {...props} alt={name} />
      <AvatarFallback delayMs={600}>{fallback}</AvatarFallback>
    </AvatarRoot>
  )
}
