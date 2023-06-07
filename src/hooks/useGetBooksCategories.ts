import { Category } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/axios'

interface IBooksCategories {
  categories: (Category & {
    id: string
    name: string
  })[]
}

export async function getBooksCategories(): Promise<IBooksCategories> {
  const { data } = await api.get(`/books/categories`)
  return data
}

export function useGetBooksCategories() {
  return useQuery({
    queryKey: ['booksCategories'],
    queryFn: () => getBooksCategories(),
    staleTime: 1000 * 60, // 1 minute,
  })
}
