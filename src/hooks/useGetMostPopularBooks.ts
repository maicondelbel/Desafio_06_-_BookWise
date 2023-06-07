import { Book } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/axios'

interface IPopularBooks {
  books: (Book & {
    avgRating: number | null | undefined
  })[]
}

export async function getMostPopularBooks(): Promise<IPopularBooks> {
  const { data } = await api.get(`/ratings/popular`)
  return data
}

export function useGetMostPopularBooks() {
  return useQuery({
    queryKey: ['mostPopularBooks'],
    queryFn: () => getMostPopularBooks(),
    staleTime: 1000 * 60, // 1 minute,
  })
}
