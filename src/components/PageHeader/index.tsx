import { ReactNode } from 'react'
import { PageHeaderContainer } from './style'

interface IPageTitle {
  icon: ReactNode
  children?: ReactNode
  title: string
}

export function PageHeader({ children, title, icon }: IPageTitle) {
  return (
    <PageHeaderContainer>
      <h1>
        {icon}
        {title}
      </h1>

      {children}
    </PageHeaderContainer>
  )
}
