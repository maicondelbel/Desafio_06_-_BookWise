import { Book } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/axios'

interface IBooks {
  books: (Book & {
    ratings: number
    avgRating: number | null | undefined
    categories: string[]
  })[]
}

export async function getBooks(): Promise<IBooks> {
  const { data } = await api.get(`/books/`)
  return data
}

export function useGetBooks() {
  return useQuery({
    queryKey: ['books'],
    queryFn: () => getBooks(),
    staleTime: 1000 * 60, // 1 minute,
  })
}
