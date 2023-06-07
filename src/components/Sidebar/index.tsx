import { useGetBookById } from '@/hooks/useGetBookById'
import { useSelectedBook } from '@/hooks/useSelectedBook'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ReviewCard } from '../Cards/ReviewCard'
import { Link } from '../Link'
import { LoginModal } from '../LoginModal'
import { RatingStars } from '../RatingStars'
import { ReviewForm } from '../ReviewForm'
import {
  AboutBox,
  BookDetailBottom,
  BookDetailContainer,
  BookDetailTop,
  BookInfoBox,
  BookTitle,
  DialogContent,
  DialogOverlay,
  IconButton,
  Rating,
  ReviewSection,
  ReviewSectionHeader,
} from './styles'

import { useSession } from 'next-auth/react'
import { Loading } from '../Loading'

interface ISidebar {
  open: boolean
}

export function Sidebar({ open }: ISidebar) {
  const { selectedBookId, onSetSelectedBookId } = useSelectedBook()
  const [isOpenSidebar, setIsOpenSidebar] = useState(open)
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false)

  const { data: responseBookById, isFetching: isLoadingBookbyId } =
    useGetBookById(selectedBookId)

  const { data: session } = useSession()

  const [isOpenRatingForm, setIsOpenRatingForm] = useState(false)

  function handleCloseAndClearSelectedBook() {
    onSetSelectedBookId(undefined)
  }

  function handleOpenLoginModal() {
    if (!session) {
      setIsOpenLoginModal(!isOpenLoginModal)
    }
    setIsOpenRatingForm(true)
  }

  function onCloseSidebar(open: boolean) {
    setIsOpenSidebar(open)
    setIsOpenRatingForm(false)
  }

  function onCloseLoginModal(open: boolean) {
    setIsOpenLoginModal(open)
    if (!session) {
      setIsOpenRatingForm(false)
    }
  }

  const isAlreadyRated = responseBookById?.book?.ratings.some((item) => {
    return item.user_id === session?.user.id
  })

  useEffect(() => {
    setIsOpenSidebar(open)
  }, [open])

  return (
    <>
      <Dialog.Root
        open={isOpenSidebar}
        onOpenChange={(state) => {
          onCloseSidebar(state)
        }}
      >
        <Dialog.Portal>
          <DialogOverlay>
            <DialogContent onCloseAutoFocus={handleCloseAndClearSelectedBook}>
              {isLoadingBookbyId ? (
                <Loading />
              ) : (
                responseBookById?.book && (
                  <>
                    <BookDetailContainer>
                      <BookDetailTop>
                        <Image
                          src={responseBookById.book.cover_url}
                          alt={responseBookById.book.name}
                          width={172}
                          height={242}
                        />
                        <BookInfoBox>
                          <BookTitle>
                            <h4>{responseBookById.book.name}</h4>
                            <span>{responseBookById.book.author}</span>
                          </BookTitle>
                          <Rating>
                            <RatingStars
                              size={20}
                              value={responseBookById.book.avgRating.toString()}
                              disabled
                            />
                            <span>
                              {responseBookById.book.ratings.length === 1
                                ? `${responseBookById.book.ratings.length} avaliação`
                                : `${responseBookById.book.ratings.length} avaliações`}
                            </span>
                          </Rating>
                        </BookInfoBox>
                      </BookDetailTop>
                      <BookDetailBottom>
                        <AboutBox>
                          <BookmarkSimple size={24} />
                          <div>
                            <h5>Categoria</h5>
                            <span>
                              {responseBookById.book.categories
                                ?.map((x) => x.category.name)
                                ?.join(', ')}
                            </span>
                          </div>
                        </AboutBox>
                        <AboutBox>
                          <BookOpen size={24} />
                          <div>
                            <h5>Páginas</h5>
                            <span>{responseBookById.book.total_pages}</span>
                          </div>
                        </AboutBox>
                      </BookDetailBottom>
                    </BookDetailContainer>
                    <ReviewSection>
                      <ReviewSectionHeader>
                        <h2>Avaliações</h2>
                        {!isOpenRatingForm && !isAlreadyRated && (
                          <Link
                            href="/explore"
                            size="medium"
                            variant="purple"
                            onClick={handleOpenLoginModal}
                          >
                            Avaliar
                          </Link>
                        )}
                      </ReviewSectionHeader>
                      {session && !isAlreadyRated && isOpenRatingForm && (
                        <ReviewForm
                          onSetIsOpenRatingForm={setIsOpenRatingForm}
                        />
                      )}

                      {responseBookById.book.ratings.map((rating) => {
                        return (
                          <ReviewCard
                            key={rating.id}
                            ratings={rating}
                            hightlight={session?.user.id === rating.user_id}
                          />
                        )
                      })}
                    </ReviewSection>
                  </>
                )
              )}
              <Dialog.Close asChild>
                <IconButton aria-label="Close">
                  <X size={24} />
                </IconButton>
              </Dialog.Close>
            </DialogContent>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
      <LoginModal
        isOpen={isOpenLoginModal}
        // onOpenChange={setIsOpenLoginModal}
        onOpenChange={(state) => onCloseLoginModal(state)}
      />
    </>
  )
}
