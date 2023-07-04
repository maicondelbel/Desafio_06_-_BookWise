import { MostPopularCard } from '@/components/Cards/MostPopularCard'
import { Link } from '@/components/Link'
import { Layout } from '@/layouts'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import {
  MainSection,
  RightSideInner,
  RightSideSection,
  RightSideSectionContent,
  SectionContainer,
  SectionHeader,
} from './styles'

import { LatestRatingCard } from '@/components/Cards/LatestRatingCard'
import { LatestReadCard } from '@/components/Cards/LatestReadCard'
import { Loading } from '@/components/Loading'
import { PageHeader } from '@/components/PageHeader'
import { getBookById } from '@/hooks/useGetBookById'
import { useGetLatestBookRatingByMe } from '@/hooks/useGetLatestBookRatingByMe'
import { useGetLatestBooksRatings } from '@/hooks/useGetLatestBooksRatings'
import { useGetMostPopularBooks } from '@/hooks/useGetMostPopularBooks'
import { queryClient } from '@/lib/reactQuery'
import { useRouter } from 'next/router'

import { useSession } from 'next-auth/react'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const isLoggedIn = !!session

  const { data: latestBoksRatings, isFetching: isFetchingLatestRatingsBooks } =
    useGetLatestBooksRatings()
  const { data: mostPopularBooks, isFetching: isFetchingmostPopularBooks } =
    useGetMostPopularBooks()
  const { data: latestBookRatingByMe, isFetching: isFetchingLatestRatingByMe } =
    useGetLatestBookRatingByMe(isLoggedIn)

  async function handleSelectBook(bookId: string) {
    await router.push(`/explore?book=${bookId}`)
  }

  async function handlePrefetchHabitsInDay(bookId: string) {
    await queryClient.prefetchQuery({
      queryKey: ['book', bookId],
      queryFn: () => getBookById(bookId),
      staleTime: 1000 * 60, // 1 minute
    })
  }

  return (
    <>
      <Head>
        <title>BookWise | Home </title>
      </Head>

      <PageHeader title="Início" icon={<ChartLineUp />} />
      {isFetchingLatestRatingByMe ||
      isFetchingLatestRatingsBooks ||
      isFetchingmostPopularBooks ? (
        <Loading />
      ) : (
        <SectionContainer>
          <MainSection>
            <>
              {isLoggedIn && latestBookRatingByMe?.rating && (
                <>
                  <SectionHeader>
                    <h2>Sua última leitura</h2>
                    <Link href="/explore" size="small" variant="purple">
                      Ver todos
                      <CaretRight />
                    </Link>
                  </SectionHeader>
                  <LatestReadCard
                    onMouseEnter={() =>
                      handlePrefetchHabitsInDay(
                        latestBookRatingByMe.rating?.book.id!,
                      )
                    }
                    key={latestBookRatingByMe.rating.book_id}
                    book={latestBookRatingByMe.rating.book}
                    rate={latestBookRatingByMe.rating.rate}
                    created_at={latestBookRatingByMe.rating.created_at}
                  />
                </>
              )}
              {isFetchingLatestRatingsBooks ? (
                <Loading />
              ) : (
                <>
                  <SectionHeader>
                    <h2>Avaliações mais recentes</h2>
                  </SectionHeader>
                  {latestBoksRatings?.ratings.map((book) => {
                    return (
                      <LatestRatingCard
                        onMouseEnter={() =>
                          handlePrefetchHabitsInDay(book.book.id)
                        }
                        key={book.id}
                        book={book.book}
                        user={book.user}
                        rate={book.rate}
                        created_at={new Date(book.created_at).toISOString()}
                      />
                    )
                  })}
                </>
              )}
            </>
          </MainSection>
          <RightSideSection>
            <RightSideInner>
              {isFetchingmostPopularBooks ? (
                <Loading />
              ) : (
                <>
                  <SectionHeader>
                    <h2>Livros populares</h2>
                    <Link href="/explore" size="small" variant="purple">
                      Ver todos
                      <CaretRight />
                    </Link>
                  </SectionHeader>
                  <RightSideSectionContent>
                    {mostPopularBooks?.books.map((book) => {
                      return (
                        <MostPopularCard
                          key={book.id}
                          onClick={() => handleSelectBook(book.id)}
                          book={book}
                          onMouseEnter={() =>
                            handlePrefetchHabitsInDay(book.id)
                          }
                        />
                      )
                    })}
                  </RightSideSectionContent>
                </>
              )}
            </RightSideInner>
          </RightSideSection>
        </SectionContainer>
      )}
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
