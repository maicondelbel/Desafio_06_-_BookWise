import { NavLinkContainer } from './styles'
import { useRouter } from 'next/router'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface INavLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

export function NavListItemLink({ href, children, ...props }: INavLink) {
  const router = useRouter()

  return (
    <NavLinkContainer href={href} active={router.asPath === href} {...props}>
      {children}
    </NavLinkContainer>
  )
}
