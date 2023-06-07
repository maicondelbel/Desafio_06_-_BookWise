import { prisma } from '@/lib/prisma'
import getMostFrequent from '@/utils/getMostFrequent'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const userId = String(req.query.userId)

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  if (!user) return res.json({ user: null })

  const readPages = user?.ratings.reduce(
    (acc, rating) => acc + rating.book.total_pages,
    0,
  )

  const ratedBooks = user?.ratings.length

  const readAuthors = user?.ratings.reduce((acc, rating) => {
    if (!acc.includes(rating.book.author)) {
      acc.push(rating.book.author)
    }
    return acc
  }, [] as string[])

  const categories = user?.ratings?.flatMap((rating) =>
    rating?.book?.categories?.flatMap((category) => category?.category?.name),
  )

  const mostReadCategory =
    categories.length > 0 ? getMostFrequent(categories) : 'N/D'

  const profileData = {
    user: {
      ...user,
    },
    ratings: user?.ratings,
    readPages,
    ratedBooks,
    readAuthors: readAuthors?.length,
    mostReadCategory,
  }

  return res.json({ profile: profileData })
}
