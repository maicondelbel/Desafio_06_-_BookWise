import { Avatar } from '@/components/Avatar'
import { NavListItemLink } from '@/components/NavListItemLink'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import {
  Container,
  FirstName,
  FullLogoBox,
  IconLogoBox,
  LoginButton,
  LogoutBox,
  MainContainer,
  NavList,
  NavListItem,
  Navbar,
  Section,
} from './styles'

interface ILayout {
  children: ReactNode
}

export function Layout({ children }: ILayout) {
  const router = useRouter()

  const { data: session, status } = useSession()

  function goToLogin() {
    router.push('/')
  }

  return (
    <Container>
      <Section>
        <FullLogoBox>
          <Image
            src="/logo-bookwise.svg"
            width={128}
            height={32}
            alt="Logo BookWise"
          />
        </FullLogoBox>
        <IconLogoBox>
          <Image
            src="/logo-icon.svg"
            width={32}
            height={32}
            alt="Logo BookWise"
          />
        </IconLogoBox>
        <Navbar>
          <NavList>
            <NavListItem>
              <NavListItemLink href="/home">
                <ChartLineUp size={24} />
                <span>Início</span>
              </NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink href="/explore">
                <Binoculars size={24} />
                <span>Explorar</span>
              </NavListItemLink>
            </NavListItem>
            {session && (
              <NavListItem>
                <NavListItemLink href={`/profile/${session.user.id}`}>
                  <User size={24} />
                  <span>Profile</span>
                </NavListItemLink>
              </NavListItem>
            )}
          </NavList>
          {status !== 'loading' && !session?.user ? (
            <LoginButton onClick={goToLogin}>
              <span>Fazer Login</span>
              <SignIn size={20} />
            </LoginButton>
          ) : (
            session && (
              <LogoutBox>
                <Avatar
                  name={session.user.name}
                  size="medium"
                  src={session.user.avatar_url}
                />
                <FirstName>{session.user.name.split(' ', 1)}</FirstName>
                <button onClick={() => signOut()}>
                  <SignOut size={20} />
                </button>
              </LogoutBox>
            )
          )}
        </Navbar>
      </Section>
      <MainContainer>{children}</MainContainer>
    </Container>
  )
}
