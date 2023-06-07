import { Book, CategoriesOnBooks, Category, Rating, User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/axios'

interface IBookById {
  book:
    | (Book & {
        categories: (CategoriesOnBooks & {
          category: Category
        })[]
        ratings: (Rating & {
          user: User
        })[]
        avgRating: number
      })
    | null
}

export async function getBookById(
  bookId: string | undefined,
): Promise<IBookById> {
  const { data } = await api.get(`/books/${bookId}`)
  return data
}

export function useGetBookById(bookId: string | undefined) {
  return useQuery({
    queryKey: ['book', bookId],
    queryFn: () => getBookById(bookId),
    enabled: !!bookId,
    staleTime: 1000 * 60, // 1 minute,
  })
}
