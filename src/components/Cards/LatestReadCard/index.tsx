/* eslint-disable camelcase */
import { Book } from '@prisma/client'
import { RatingStars } from '../../RatingStars'

import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useRouter } from 'next/router'
import { AnchorHTMLAttributes } from 'react'
import {
  BookImage,
  CardContainer,
  CardContent,
  CardContentDescription,
  CardContentHeader,
  CardContentTop,
  CardContentWrapper,
  ImageContainer,
} from '../styles'

interface ILatestReadCard extends AnchorHTMLAttributes<HTMLAnchorElement> {
  created_at: Date
  rate: number
  book: Book
}

export function LatestReadCard({
  book,
  rate,
  created_at,
  ...props
}: ILatestReadCard) {
  const router = useRouter()

  async function handleSelectBook(bookId: string) {
    await router.push(`/explore?book=${bookId}`)
  }

  return (
    <CardContainer {...props}>
      <CardContent>
        <ImageContainer>
          <BookImage
            src={book.cover_url}
            alt={book.name}
            fill
            onClick={() => handleSelectBook(book.id)}
          />
        </ImageContainer>
        <CardContentWrapper>
          <CardContentHeader>
            <CardContentTop>
              <time dateTime={new Date(created_at).toLocaleDateString('pt-BR')}>
                {formatDistance(new Date(created_at), new Date(), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </time>
              <RatingStars value={rate.toString()} size={16} readOnly={true} />
            </CardContentTop>
            <h4>{book.name}</h4>
            <span>{book.author}</span>
          </CardContentHeader>
          <CardContentDescription>{book.summary}</CardContentDescription>
        </CardContentWrapper>
      </CardContent>
    </CardContainer>
  )
}
