import Image from 'next/image'
import { AllHTMLAttributes } from 'react'
import { RatingStars } from '../../RatingStars'
import {
  CardContentHeader,
  CardContentWrapper,
  ImageContainer,
  MostPopularCardContainer,
} from '../styles'

interface IMostPopularCard extends AllHTMLAttributes<HTMLElement> {
  book: {
    ratings?: number
    avgRating: number | null | undefined
    id?: string
    name: string
    author: string
    summary?: string
    cover_url: string
    total_pages?: number
    created_at?: Date
  }
}

export function MostPopularCard({ book, ...props }: IMostPopularCard) {
  return (
    <MostPopularCardContainer {...props}>
      {/* <Image src={book.cover_url} alt={book.name} width={64} height={94} /> */}
      <ImageContainer>
        <Image src={book.cover_url} alt={book.name} fill={true} />
      </ImageContainer>
      <CardContentWrapper>
        <CardContentHeader>
          <h4>{book.name}</h4>
          <span>{book.author}</span>
        </CardContentHeader>
        <RatingStars
          value={book.avgRating?.toString()}
          size={16}
          readOnly={true}
        />
      </CardContentWrapper>
    </MostPopularCardContainer>
  )
}
