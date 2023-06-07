import { Book, CategoriesOnBooks, Category, Rating, User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/axios'

export interface IProfile {
  profile: {
    user: User & {
      ratings: (Rating & {
        book: Book & {
          categories: (CategoriesOnBooks & {
            category: Category
          })[]
        }
      })[]
    }
    readPages: Number
    ratedBooks: Number
    readAuthors: Number
    mostReadCategory: string
  }
}

export async function getProfileById(userId: string): Promise<IProfile> {
  const { data } = await api.get(`/profile/${userId}`)
  return data
}

export function useGetProfileById(userId: string) {
  return useQuery({
    queryKey: ['profile', userId],
    queryFn: () => getProfileById(userId),
    staleTime: 1000 * 60, // 1 minute,
    enabled: !!userId,
  })
}
