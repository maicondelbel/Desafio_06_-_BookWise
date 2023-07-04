import { useRouter } from 'next/router'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { NavLinkContainer } from './styles'

interface INavLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

export function NavListItemLink({ href, children, ...props }: INavLink) {
  const router = useRouter()

  return (
    <NavLinkContainer
      href={href}
      active={router.asPath.includes(href)}
      {...props}
    >
      {children}
    </NavLinkContainer>
  )
}
