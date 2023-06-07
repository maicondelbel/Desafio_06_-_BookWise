import { Avatar } from '@/components/Avatar'
import { RatingStars } from '@/components/RatingStars'
import { Rating, User } from '@prisma/client'
import {
  CardContentReview,
  CardHeader,
  CardHeaderWrapper,
  CardReviewContainer,
  UserInfoContainer,
} from '../styles'

import Link from 'next/link'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IReviewCard {
  hightlight?: boolean
  ratings: Rating & {
    user: User
  }
}

export function ReviewCard({ hightlight = false, ratings }: IReviewCard) {
  return (
    <CardReviewContainer hightlight={hightlight}>
      <CardHeader>
        <CardHeaderWrapper>
          <Link href={`/profile/${ratings.user_id}`}>
            <Avatar
              size="medium"
              src={
                ratings.user.avatar_url ? ratings.user.avatar_url : undefined
              }
              name={ratings.user.name}
            />
          </Link>
          <UserInfoContainer>
            <h3>{ratings.user.name}</h3>
            <time
              dateTime={new Date(ratings.created_at).toLocaleDateString(
                'pt-BR',
              )}
            >
              {formatDistance(new Date(ratings.created_at), new Date(), {
                addSuffix: true,
                locale: ptBR,
              })}
            </time>
          </UserInfoContainer>
        </CardHeaderWrapper>
        <RatingStars value={String(ratings.rate)} size={16} readOnly={true} />
      </CardHeader>
      <CardContentReview>{ratings.description}</CardContentReview>
    </CardReviewContainer>
  )
}
