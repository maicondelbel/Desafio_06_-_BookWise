import { styled } from '@/styles/stitches.config'
import Image from 'next/image'

export const CardContainerWrapper = styled('div', {
  time: {
    color: '$gray300',
    fontSize: '$sm',
    marginBottom: '$2',
  },
  article: {
    marginTop: '$2',
  },
})

export const CardContainer = styled('article', {
  padding: '$6',
  background: '$gray700',
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

export const CardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '@xxs': {
    flexDirection: 'column',
  },
})

export const CardHeaderWrapper = styled('div', {
  display: 'flex',
  gap: '$4',
})

export const UserInfoContainer = styled('div', {
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingRight: '$3',

  h3: {
    fontSize: '$md',
    lineHeight: '$base',
  },

  time: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',

    '&:first-letter': {
      textTransform: 'capitalize',
    },
  },
})

export const CardContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  '@sm': {
    flexDirection: 'column',
  },
})

export const BookImage = styled(Image, {
  cursor: 'pointer',
})

export const CardContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  flex: '1',

  // '@sm': {
  //   textAlign: 'center',
  //   alignItems: 'center',
  // },
})

export const CardContentHeader = styled('div', {
  marginBottom: '$3',

  h4: {
    fontSize: '$md',
    lineHeight: '$short',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const CardContentDescription = styled('p', {
  color: '$gray300',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const CardContentTop = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$3',

  time: {
    lineHeight: '$base',
    fontSize: '$sm',
    color: '$gray300',
    marginRight: '$3',
  },
})

export const MostPopularCardContainer = styled('article', {
  background: '$gray700',
  borderRadius: '0.5rem',
  padding: '1.125rem $5',
  display: 'flex',
  gap: '$5',
  border: '2px solid transparent',
  width: '100%',
  transition: 'all 0.2s',
  cursor: 'pointer',

  '&:hover': {
    border: '2px solid $gray600',
  },

  '@md': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const ImageContainer = styled('div', {
  position: 'relative',
  height: '152px',
  width: '108px',

  img: {
    objectFit: 'cover',
  },

  '@md': {
    height: '210px',
    width: '150px',
  },

  '@xs': {
    height: '247px',
    width: '176px',
  },
})

export const CardReviewContainer = styled('article', {
  padding: '$6',
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  variants: {
    hightlight: {
      true: {
        background: '$gray600',
      },
      false: {
        background: '$gray700',
      },
    },
  },
})

export const CardContentReview = styled('p', {
  color: '$gray300',
  fontSize: '$sm',
  lineHeight: '$base',
})
