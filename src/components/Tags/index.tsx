import { ButtonHTMLAttributes } from 'react'
import { TagContainer } from './styles'

interface ITag extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  active?: boolean
  filterByCategory: (category: string) => void
}

export function Tag({
  title,
  active = false,
  filterByCategory,
  ...props
}: ITag) {
  function handleFilterByCategory() {
    filterByCategory(title)
  }
  return (
    <TagContainer {...props} active={active} onClick={handleFilterByCategory}>
      {title}
    </TagContainer>
  )
}
