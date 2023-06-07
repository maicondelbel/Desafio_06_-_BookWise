/* eslint-disable camelcase */
import { Book } from '@prisma/client'

import { RatingStars } from '@/components/RatingStars'
import { useSelectedBook } from '@/hooks/useSelectedBook'
import { useRouter } from 'next/router'
import { AnchorHTMLAttributes } from 'react'
import { BookImage } from '../styles'
import {
  CardContainer,
  CardContainerWrapper,
  CardContentBottom,
  CardContentReview,
  CardContentTop,
  DetailsContent,
  ImageContainer,
  ImageWrapper,
  TitleAndAuthorContainer,
} from './styles'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IRatedCard extends AnchorHTMLAttributes<HTMLAnchorElement> {
  created_at: Date
  rate: number
  book: Book
}

export function RatedCard({ book, rate, created_at, ...props }: IRatedCard) {
  const router = useRouter()
  const { onSetSelectedBookId } = useSelectedBook()

  async function handleSelectBook(bookId: string) {
    onSetSelectedBookId(bookId)
    await router.push('/explore')
  }

  return (
    <CardContainerWrapper>
      <time dateTime="saas">
        {formatDistance(new Date(created_at), new Date(), {
          addSuffix: true,
          locale: ptBR,
        })}
      </time>
      <CardContainer {...props}>
        <CardContentTop>
          <ImageWrapper>
            <ImageContainer>
              <BookImage
                src={book.cover_url}
                alt={book.name}
                fill
                sizes={'30vw'}
                onClick={() => handleSelectBook(book.id)}
              />
            </ImageContainer>
          </ImageWrapper>
          <DetailsContent>
            <TitleAndAuthorContainer>
              <h3>{book.name}</h3>
              <span>{book.author}</span>
            </TitleAndAuthorContainer>
            <RatingStars value={rate.toString()} size={16} readOnly={true} />
          </DetailsContent>
        </CardContentTop>
        <CardContentBottom>
          <CardContentReview>{book.summary}</CardContentReview>
        </CardContentBottom>
      </CardContainer>
    </CardContainerWrapper>
  )
}
