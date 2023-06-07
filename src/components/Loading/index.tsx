import { CircleNotch } from '@phosphor-icons/react'
import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <CircleNotch size={32} color="#303F73">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 0 0"
          to="360 0 0"
          repeatCount="indefinite"
        ></animateTransform>
      </CircleNotch>
    </LoadingContainer>
  )
}
