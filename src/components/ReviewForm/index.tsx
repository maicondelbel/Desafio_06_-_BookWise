import { zodResolver } from '@hookform/resolvers/zod'
import { Check, X } from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Avatar } from '../Avatar'
import {
  CardHeader,
  CardHeaderWrapper,
  UserInfoContainer,
} from '../Cards/styles'
import { RatingStars } from '../RatingStars'
import { TextArea } from './TextArea'
import {
  ActionButton,
  ErrorBox,
  ReviewFormActionsBox,
  ReviewFormContainer,
  ReviewFormContent,
} from './styles'

import { useSelectedBook } from '@/hooks/useSelectedBook'
import { api } from '@/lib/axios'
import { queryClient } from '@/lib/reactQuery'
import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

interface IReviewForm {
  onSetIsOpenRatingForm: (state: boolean) => void
}

const schema = z.object({
  rate: z
    .string()
    .nonempty({ message: 'Campo requirido' })
    .min(1, { message: 'Precisa de ao menos uma estrela' })
    .max(5, { message: 'Máximo são 5 estrelas' }),
  description: z
    .string()
    .nonempty({ message: 'Campo requirido' })
    .min(5, { message: 'A avaliação precisa ter ao menos 5 caracteres' })
    .max(450, { message: 'A avaliação precisa ter menos que 450 caracteres' }),
})

type IFormData = z.infer<typeof schema>

export function ReviewForm({ onSetIsOpenRatingForm }: IReviewForm) {
  const { selectedBookId } = useSelectedBook()
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      rate: '',
      description: undefined,
    },
  })

  const { data: session } = useSession()

  function handleCloseRatingForm() {
    onSetIsOpenRatingForm(false)
    reset()
  }

  async function mutationCreateRateBook(
    data: IFormData,
    url: string | undefined,
  ) {
    return await api.post(`/books/${url}/rate`, {
      rate: data.rate,
      description: data.description,
    })
  }

  const createRateBook = useMutation({
    mutationFn: async (data: IFormData) =>
      mutationCreateRateBook(data, selectedBookId),
    onMutate: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['book', selectedBookId],
      })
      await queryClient.invalidateQueries({ queryKey: ['books'] })
    },
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ['book', selectedBookId] })
      reset()
    },
    onError: () => {
      reset()
    },
  })

  async function onSubmit(data: IFormData) {
    await createRateBook.mutateAsync(data)
    onSetIsOpenRatingForm(false)
    reset()
  }

  return (
    <ReviewFormContainer
      onSubmit={handleSubmit(onSubmit)}
      isSubmiting={isSubmitting}
    >
      <CardHeader>
        <CardHeaderWrapper>
          <Avatar
            size="medium"
            src={session?.user.avatar_url}
            name={session?.user.name}
          />
          <UserInfoContainer>
            <h3>{session?.user.name}</h3>
          </UserInfoContainer>
        </CardHeaderWrapper>
        <Controller
          name="rate"
          control={control}
          render={({ field }) => (
            <RatingStars
              hasError={!!errors.rate?.message}
              value={field.value}
              onValueChange={field.onChange}
              size={24}
              disabled={isSubmitting}
            />
          )}
        />
      </CardHeader>
      <ReviewFormContent>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextArea
              hasError={!!errors.description?.message}
              {...field}
              maxLength={450}
              value={field.value}
              onChange={field.onChange}
              disabled={isSubmitting}
            />
          )}
        />
        <ReviewFormActionsBox>
          <ErrorBox>
            <span>
              {(errors?.description?.message || errors?.rate?.message) &&
                'Campos requiridos'}
            </span>
          </ErrorBox>
          <div>
            <ActionButton
              variant={'cancel'}
              type="button"
              onClick={handleCloseRatingForm}
              disabled={isSubmitting}
            >
              <X size={24} />
            </ActionButton>
            <ActionButton
              variant={'send'}
              type="submit"
              disabled={isSubmitting}
            >
              <Check size={24} />
            </ActionButton>
          </div>
        </ReviewFormActionsBox>
      </ReviewFormContent>
    </ReviewFormContainer>
  )
}
