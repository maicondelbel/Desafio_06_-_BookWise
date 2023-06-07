/* eslint-disable react-hooks/exhaustive-deps */
import { Loading } from '@/components/Loading'
import { createModal } from '@/lib/createModal'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Aside, Container, LoginBox, LoginButton, Section } from './styles'

export default function Login() {
  const router = useRouter()
  const { data: session, status } = useSession()

  function goToHome() {
    router.push('/home')
  }

  function handleSignIn(provider: string) {
    if (provider === 'google') {
      createModal('/google-signin', 'Google Sign In')
    }
    if (provider === 'github') {
      createModal('/github-signin', 'GitHub Sign In')
    }
  }

  useEffect(() => {
    if (!(status === 'loading') && session) {
      goToHome()
    }
  }, [session])

  return (
    <Container>
      {status !== 'unauthenticated' ? (
        <Loading />
      ) : (
        <>
          <Head>
            <title>BookWise | Boas Vindas</title>
          </Head>

          <Aside>
            <Image
              src="/logo-bookwise.svg"
              alt="Logo Bookwise"
              width={232}
              height={58}
            />
          </Aside>
          <Section>
            <LoginBox>
              <h1>Boas vindas!</h1>
              <p>Faça seu login ou acesse como visitante.</p>
              <div>
                <LoginButton onClick={() => handleSignIn('google')}>
                  <Image
                    src="/google-icon.svg"
                    alt="Logo Google"
                    width={32}
                    height={32}
                  />
                  Entrar com Google
                </LoginButton>
                <LoginButton onClick={() => handleSignIn('github')}>
                  <Image
                    src="/github-icon.svg"
                    alt="Logo GitHub"
                    width={32}
                    height={32}
                  />
                  Entrar com GitHub
                </LoginButton>
                <LoginButton onClick={goToHome}>
                  <Image
                    src="/guest-icon.svg"
                    alt="Imagem de foguete"
                    width={32}
                    height={32}
                  />
                  Acessar como Visitante
                </LoginButton>
              </div>
            </LoginBox>
          </Section>
        </>
      )}
    </Container>
  )
}
