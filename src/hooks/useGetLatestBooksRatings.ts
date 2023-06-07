import { Book, Rating, User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/axios'

interface ILatestBooksRatings {
  ratings: (Rating & {
    book: Book
    user: User
  })[]
}

export async function getLatestBooksRatings(): Promise<ILatestBooksRatings> {
  const { data } = await api.get(`/ratings/latest`)
  return data
}

export function useGetLatestBooksRatings() {
  return useQuery({
    queryKey: ['latestBoksRatings'],
    queryFn: () => getLatestBooksRatings(),
    staleTime: 1000 * 60, // 1 minute,
  })
}
