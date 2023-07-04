/* eslint-disable camelcase */
import { Book, User } from '@prisma/client'
import { RatingStars } from '../../RatingStars'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnchorHTMLAttributes } from 'react'
import {
  BookImage,
  CardContainer,
  CardContent,
  CardContentDescription,
  CardContentHeader,
  CardContentWrapper,
  CardHeader,
  CardHeaderWrapper,
  ImageContainer,
  UserInfoContainer,
} from '../styles'
import { Avatar } from './../../Avatar/index'

interface ILatestRatingCard extends AnchorHTMLAttributes<HTMLAnchorElement> {
  created_at: string
  rate: number
  user: User
  book: Book
}

export function LatestRatingCard({
  book,
  user,
  rate,
  created_at,
  ...props
}: ILatestRatingCard) {
  const router = useRouter()

  async function handleSelectBook(bookId: string) {
    await router.push(`/explore?book=${bookId}`)
  }

  return (
    <CardContainer {...props}>
      <CardHeader>
        <CardHeaderWrapper>
          <Link href={`/profile/${user.id}`}>
            <Avatar
              size="medium"
              src={user.avatar_url ? user.avatar_url : undefined}
              name={user.name}
            />
          </Link>
          <UserInfoContainer>
            <h3>{user.name}</h3>
            <time dateTime={created_at}>
              {formatDistance(new Date(created_at), new Date(), {
                addSuffix: true,
                locale: ptBR,
              })}
            </time>
          </UserInfoContainer>
        </CardHeaderWrapper>
        <RatingStars value={rate.toString()} size={16} readOnly={true} />
      </CardHeader>
      <CardContent>
        <ImageContainer>
          <BookImage
            src={book.cover_url}
            alt="Book"
            fill
            onClick={() => handleSelectBook(book.id)}
          />
        </ImageContainer>
        {/* </Link> */}
        <CardContentWrapper>
          <CardContentHeader>
            <h4>{book.name}</h4>
            <span>{book.author}</span>
          </CardContentHeader>
          <CardContentDescription>{book.summary}</CardContentDescription>
        </CardContentWrapper>
      </CardContent>
    </CardContainer>
  )
}
