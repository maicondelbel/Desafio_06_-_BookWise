import { styled } from '@/styles/stitches.config'

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
  gap: '$6',
})

export const ImageWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

export const ImageContainer = styled('div', {
  position: 'relative',
  height: '134px',
  width: '98px',

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

export const CardContentTop = styled('div', {
  display: 'flex',
  gap: '$5',

  '@xs': {
    flexDirection: 'column',
  },
})

export const CardContentBottom = styled('div', {
  display: 'flex',
})

export const CardContentReview = styled('p', {
  color: '$gray300',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const DetailsContent = styled('div', {
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const TitleAndAuthorContainer = styled('div', {
  h3: {
    fontSize: '$lg',
    lineHeight: '$short',
  },
  span: {
    fontSize: '$sm',
    color: '$gray400',
    lineHeight: '$base',
  },
})
