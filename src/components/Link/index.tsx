import { AnchorHTMLAttributes, ReactNode } from 'react'
import { LinkContainer } from './styles'

interface INavLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  variant: 'white' | 'purple'
  size: 'medium' | 'small'
}

export function Link({ href, children, size, variant, ...props }: INavLink) {
  return (
    <LinkContainer href={href} {...props} size={size} variant={variant}>
      {children}
    </LinkContainer>
  )
}
