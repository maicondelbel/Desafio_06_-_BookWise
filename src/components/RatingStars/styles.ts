import * as RadioGroup from '@radix-ui/react-radio-group'
import { styled } from '@stitches/react'

export const RatingStarsContainer = styled(RadioGroup.Root, {
  display: 'flex',
  width: 'fit-content',
  height: 'fit-content',
  border: '1px solid transparent',

  svg: {
    color: '$purple100',
  },

  variants: {
    hasError: {
      true: {
        border: '1px solid $red',
      },
    },
  },
})

export const RatingStarItem = styled(RadioGroup.Item, {
  padding: '$px',
  lineHeight: '0',

  '&:not([disabled])': {
    cursor: 'pointer',
  },
})
