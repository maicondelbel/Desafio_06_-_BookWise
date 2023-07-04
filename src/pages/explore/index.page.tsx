import { MostPopularCard } from '@/components/Cards/MostPopularCard'
import { Input } from '@/components/Inputs'
import { Loading } from '@/components/Loading'
import { PageHeader } from '@/components/PageHeader'
import { Sidebar } from '@/components/Sidebar'
import { Tag } from '@/components/Tags'
import { getBookById } from '@/hooks/useGetBookById'
import { useGetBooks } from '@/hooks/useGetBooks'
import { useGetBooksCategories } from '@/hooks/useGetBooksCategories'
import { Layout } from '@/layouts'
import { queryClient } from '@/lib/reactQuery'
import { Binoculars } from '@phosphor-icons/react'
import { Book } from '@prisma/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NextPageWithLayout } from '../_app.page'
import {
  BooksGrid,
  CategoryFilterBox,
  InputFinderBox,
  PageSection,
} from './styles'

interface IBooks extends Book {
  ratings: number
  avgRating: number | null | undefined
  categories: string[]
}

interface IFindByAuthorOrBookName {
  query: string
}

const Explore: NextPageWithLayout = () => {
  // const { selectedBookId, onSetSelectedBookId } = useSelectedBook()
  const { data: responseBooks, isLoading: isFetchingBooks } = useGetBooks()
  const { data: responseBookCategories } = useGetBooksCategories()

  const [activeCategory, setActiveCategory] = useState('Tudo')

  const router = useRouter()

  const [filtredBooks, setFiltredBooks] = useState<IBooks[] | undefined>()
  const [prevFiltredBooks, setPrevFiltredBooks] = useState<
    IBooks[] | undefined
  >()

  const { register, handleSubmit, reset } = useForm<IFindByAuthorOrBookName>()

  async function handlePrefetchBookId(bookId: string) {
    await queryClient.prefetchQuery({
      queryKey: ['book', bookId],
      queryFn: () => getBookById(bookId),
      staleTime: 1000 * 60 * 5, // 5 minute
    })
  }

  async function handleSelectBook(bookId: string) {
    await router.push(`/explore?book=${bookId}`, undefined, { shallow: true })
  }

  function onFilterByCategory(category: string) {
    reset()
    if (category === 'Tudo') {
      setActiveCategory(category)
      setFiltredBooks(responseBooks?.books)
      setPrevFiltredBooks(responseBooks?.books)
    } else {
      const bookFiltredByCategory = responseBooks?.books.filter((book) => {
        return book.categories.includes(category)
      })
      setActiveCategory(category)
      setFiltredBooks(bookFiltredByCategory)
      setPrevFiltredBooks(bookFiltredByCategory)
    }
  }

  function handleFilterByAuthorOrBookName(data: IFindByAuthorOrBookName) {
    if (data.query) {
      if (prevFiltredBooks) {
        const bookFiltredByAuthorOrBookName = prevFiltredBooks.filter(
          (book) => {
            return (
              book.name.toLowerCase().includes(data.query.toLowerCase()) ||
              book.author.toLowerCase().includes(data.query.toLowerCase())
            )
          },
        )
        setFiltredBooks(bookFiltredByAuthorOrBookName)
      } else {
        const bookFiltredByAuthorOrBookName = responseBooks?.books.filter(
          (book) => {
            return (
              book.name.toLowerCase().includes(data.query.toLowerCase()) ||
              book.author.toLowerCase().includes(data.query.toLowerCase())
            )
          },
        )
        setFiltredBooks(bookFiltredByAuthorOrBookName)
      }
    } else {
      setFiltredBooks(prevFiltredBooks)
    }
  }

  useEffect(() => {
    setFiltredBooks(responseBooks?.books)
  }, [responseBooks])

  return (
    <>
      <Head>
        <title>BookWise | Explorar</title>
      </Head>

      <PageHeader icon={<Binoculars size={32} />} title="Explorar">
        <InputFinderBox
          as="form"
          onSubmit={handleSubmit(handleFilterByAuthorOrBookName)}
        >
          <Input
            placeholder="Buscar livro ou autor"
            {...register('query')}
            type="text"
          />
        </InputFinderBox>
      </PageHeader>
      <PageSection>
        {isFetchingBooks ? (
          <Loading />
        ) : (
          <>
            <CategoryFilterBox>
              <Tag
                title="Tudo"
                filterByCategory={onFilterByCategory}
                active={activeCategory === 'Tudo'}
              />
              {responseBookCategories?.categories.map((category) => {
                return (
                  <Tag
                    key={category.id}
                    title={category.name}
                    active={activeCategory === category.name}
                    filterByCategory={onFilterByCategory}
                  />
                )
              })}
            </CategoryFilterBox>
            <BooksGrid>
              {filtredBooks &&
                filtredBooks.map((book) => {
                  return (
                    <MostPopularCard
                      key={book.id}
                      book={book}
                      onMouseEnter={() => handlePrefetchBookId(book.id)}
                      onClick={() => handleSelectBook(book.id)}
                    />
                  )
                })}
            </BooksGrid>
          </>
        )}
      </PageSection>
      <Sidebar open={!!router.query.book} />
    </>
  )
}

Explore.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Explore
