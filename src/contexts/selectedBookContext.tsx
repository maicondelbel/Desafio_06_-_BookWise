import { ReactNode, createContext, useState } from 'react'

interface ISelectedBookIdContext {
  selectedBookId: string | undefined
  onSetSelectedBookId: (book: string | undefined) => void
}

export const selectedBookIdContext = createContext({} as ISelectedBookIdContext)

interface ISelectedBookContextProviderProps {
  children: ReactNode
}

export function SelectedBookIdContextProvider({
  children,
}: ISelectedBookContextProviderProps) {
  const [selectedBookId, setSelectedBookId] = useState<string | undefined>()

  function onSetSelectedBookId(bookId: string | undefined) {
    setSelectedBookId(bookId)
  }

  return (
    <selectedBookIdContext.Provider
      value={{ selectedBookId, onSetSelectedBookId }}
    >
      {children}
    </selectedBookIdContext.Provider>
  )
}
