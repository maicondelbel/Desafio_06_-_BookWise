import { Book, Rating } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/axios'

interface ILatestBooksRatings {
  rating:
    | (Rating & {
        book: Book
      })
    | null
}

export async function getLatestBookRatingByMe(): Promise<ILatestBooksRatings> {
  const { data } = await api.get(`/ratings/me`)
  return data
}

export function useGetLatestBookRatingByMe(isLoggedIn: boolean) {
  return useQuery({
    queryKey: ['latestBookRatingByMe'],
    queryFn: () => getLatestBookRatingByMe(),
    staleTime: 1000 * 60, // 1 minute,
    enabled: isLoggedIn,
  })
}
