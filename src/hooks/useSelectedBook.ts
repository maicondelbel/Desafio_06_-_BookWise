import { selectedBookIdContext } from '@/contexts/selectedBookContext'
import { useContext } from 'react'

export function useSelectedBook() {
  const value = useContext(selectedBookIdContext)

  return value
}
