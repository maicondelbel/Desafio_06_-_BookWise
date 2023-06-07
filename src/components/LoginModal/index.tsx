/* eslint-disable react-hooks/exhaustive-deps */
import { createModal } from '@/lib/createModal'
import { LoginButton } from '@/pages/login/styles'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect } from 'react'
import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  IconButton,
  LoginBox,
} from './styles'

interface ILoginModal {
  isOpen: boolean
  onOpenChange: (state: boolean) => void
}

export function LoginModal({ isOpen, onOpenChange }: ILoginModal) {
  const { data: session } = useSession()

  function handleOnOpenChange() {
    onOpenChange(!isOpen)
  }

  useEffect(() => {
    if (session) {
      onOpenChange(false)
    }
  }, [session])

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={handleOnOpenChange}>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogContent>
            <DialogTitle>Faça login para deixar sua avaliação</DialogTitle>
            <DialogDescription asChild>
              <LoginBox>
                {/* <LoginButton onClick={() => signIn('google')}> */}
                <LoginButton
                  onClick={() =>
                    createModal('/google-signin', 'Google Sign In')
                  }
                >
                  <Image
                    src="/google-icon.svg"
                    alt="Logo Google"
                    width={32}
                    height={32}
                  />
                  Entrar com Google
                </LoginButton>
                <LoginButton
                  onClick={() =>
                    createModal('/github-signin', 'GitHub Sign In')
                  }
                >
                  <Image
                    src="/github-icon.svg"
                    alt="Logo GitHub"
                    width={32}
                    height={32}
                  />
                  Entrar com GitHub
                </LoginButton>
              </LoginBox>
            </DialogDescription>
            <Dialog.Close asChild>
              <IconButton aria-label="Close">
                <X size={24} />
              </IconButton>
            </Dialog.Close>
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
