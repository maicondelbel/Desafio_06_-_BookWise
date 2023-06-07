import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const books = await prisma.book.findMany({
    include: {
      ratings: true,
      categories: {
        select: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true,
    },
  })

  const modifiedBook = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id,
    )
    const categories = book.categories.map((item) => {
      return item.category.name
    })

    return {
      ...book,
      categories,
      ratings: book.ratings.length,
      avgRating: bookAvgRating?._avg.rate,
    }
  })

  return res.json({ books: modifiedBook })
}
