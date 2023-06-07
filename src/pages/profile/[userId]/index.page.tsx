import { Layout } from '@/layouts'
import { ReactElement, useEffect, useState } from 'react'

import { Input } from '@/components/Inputs'
import { Link } from '@/components/Link'
import { NextPageWithLayout } from '@/pages/_app.page'
import { RightSideSection, SectionContainer } from '@/pages/home/styles'
import { CaretLeft, User } from '@phosphor-icons/react'
import { FindFormContainer, GuestPageHeader, MainSection } from './styles'

import { RatedCard } from '@/components/Cards/RatedCard'
import { Loading } from '@/components/Loading'
import { PageHeader } from '@/components/PageHeader'
import { ProfileBar } from '@/components/ProfileBar'
import { useGetProfileById } from '@/hooks/useGetProfileById'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client'
import { useForm } from 'react-hook-form'

interface IRatedBooks extends Rating {
  book: Book & {
    categories: (CategoriesOnBooks & {
      category: Category
    })[]
  }
}

interface IFindByAuthorOrBookName {
  query: string
}

const Profile: NextPageWithLayout = () => {
  const { query } = useRouter()
  const { data: session, status } = useSession()
  const { register, handleSubmit } = useForm<IFindByAuthorOrBookName>()

  const [filtredRatingsBooks, setFiltredRatingsBook] = useState<
    IRatedBooks[] | undefined
  >()

  const { data: responseProfile, isFetching } = useGetProfileById(
    query.userId as string,
  )

  const isMyProfile = session?.user.id === responseProfile?.profile.user.id

  function onFilterByAuthorAndBook(data: IFindByAuthorOrBookName) {
    if (data.query) {
      const bookFiltredByAuthorOrBookName =
        responseProfile?.profile.user.ratings.filter((item) => {
          return (
            item.book.name.toLowerCase().includes(data.query.toLowerCase()) ||
            item.book.author.toLowerCase().includes(data.query.toLowerCase())
          )
        })
      setFiltredRatingsBook(bookFiltredByAuthorOrBookName)
    } else {
      setFiltredRatingsBook(responseProfile?.profile.user.ratings)
    }
  }

  useEffect(() => {
    setFiltredRatingsBook(responseProfile?.profile.user.ratings)
  }, [responseProfile])

  return (
    <>
      {isFetching || status === 'loading' ? (
        <Loading />
      ) : (
        <>
          <Head>
            <title>BookWise | Profile</title>
          </Head>

          <>
            {isMyProfile ? (
              <PageHeader title="Perfil" icon={<User />}></PageHeader>
            ) : (
              <GuestPageHeader>
                <Link href="/explore" size="medium" variant="white">
                  <CaretLeft />
                  Voltar
                </Link>
              </GuestPageHeader>
            )}
          </>
          <SectionContainer>
            <MainSection>
              <FindFormContainer
                as="form"
                onSubmit={handleSubmit(onFilterByAuthorAndBook)}
              >
                <Input
                  placeholder="Buscar livro avaliado"
                  {...register('query')}
                  type="text"
                />
              </FindFormContainer>
              {isFetching ? (
                <Loading />
              ) : (
                !!filtredRatingsBooks &&
                filtredRatingsBooks.map((item) => {
                  return (
                    <RatedCard
                      key={item.id}
                      book={item.book}
                      rate={item.rate}
                      created_at={item.created_at}
                    />
                  )
                })
              )}
            </MainSection>
            <RightSideSection>
              {!isFetching && responseProfile?.profile && (
                <ProfileBar profile={responseProfile?.profile} />
              )}
            </RightSideSection>
          </SectionContainer>
        </>
      )}
    </>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Profile
