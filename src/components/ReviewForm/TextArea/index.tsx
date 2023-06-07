import { TextareaHTMLAttributes, forwardRef } from 'react'
import { TextAreaContainer } from './styles'

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength: number
  hasError?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ maxLength, value, hasError = false, ...props }, ref) => {
    return (
      <TextAreaContainer hasError={hasError}>
        <textarea ref={ref} {...props} value={value} maxLength={maxLength} />
        <span>
          {String(value).length}/{maxLength}
        </span>
      </TextAreaContainer>
    )
  },
)

TextArea.displayName = 'TextArea'
