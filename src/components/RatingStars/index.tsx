import { Star } from '@phosphor-icons/react'
import { RadioGroupProps } from '@radix-ui/react-radio-group'
import { useEffect, useState } from 'react'
import { RatingStarItem, RatingStarsContainer } from './styles'

interface IRatingStars extends RadioGroupProps {
  size: 16 | 20 | 24
  readOnly?: boolean
  hasError?: boolean
}

export function RatingStars({
  readOnly = false,
  size = 16,
  hasError = false,
  value,
  ...props
}: IRatingStars) {
  const [rating, setRating] = useState(Number(value))

  useEffect(() => {
    setRating(Number(value))
  }, [value])

  return (
    <RatingStarsContainer {...props} hasError={hasError}>
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = index + 1
        return (
          <RatingStarItem
            disabled={readOnly}
            key={starValue}
            value={String(starValue)}
            onMouseEnter={() => setRating(starValue)}
            onMouseLeave={() => setRating(Number(value))}
          >
            <Star
              size={size}
              weight={starValue <= rating ? 'fill' : 'regular'}
            />
          </RatingStarItem>
        )
      })}
    </RatingStarsContainer>
  )
}
