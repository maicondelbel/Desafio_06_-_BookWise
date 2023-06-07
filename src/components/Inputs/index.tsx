import { MagnifyingGlass } from '@phosphor-icons/react'
import { InputHTMLAttributes, forwardRef } from 'react'
import { InputContainer } from './styles'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ ...props }, ref) => {
    return (
      <InputContainer>
        <input ref={ref} {...props} />
        <MagnifyingGlass size={20} />
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'
