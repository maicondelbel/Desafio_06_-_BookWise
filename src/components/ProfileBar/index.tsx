import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
} from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import {
  IconBox,
  IconBoxDetails,
  ProfileContainer,
  ProfileContainerBottom,
  ProfileContainerTop,
  ProfileDescription,
  Separator,
} from './styles'

import { User } from '@prisma/client'

interface IProfileBar {
  profile: {
    user: User
    readPages: Number
    ratedBooks: Number
    readAuthors: Number
    mostReadCategory: string
  }
}

export function ProfileBar({ profile }: IProfileBar) {
  const memberSince = new Date(profile.user.created_at).getFullYear()
  return (
    <ProfileContainer>
      <ProfileContainerTop>
        <Avatar
          src={profile.user.avatar_url || undefined}
          name={profile.user.name}
          size="large"
        />
        <ProfileDescription>
          <h2>{profile.user.name}</h2>
          <span>membro desde {memberSince}</span>
        </ProfileDescription>
      </ProfileContainerTop>
      <Separator />
      <ProfileContainerBottom>
        <IconBox>
          <BookOpen size={32} />
          <IconBoxDetails>
            <h3>{profile.readPages.toString()}</h3>
            <span>Páginas lidas</span>
          </IconBoxDetails>
        </IconBox>
        <IconBox>
          <Books size={32} />
          <IconBoxDetails>
            <h3>{profile.ratedBooks.toString()}</h3>
            <span>Livros avaliados</span>
          </IconBoxDetails>
        </IconBox>
        <IconBox>
          <UserList size={32} />
          <IconBoxDetails>
            <h3>{profile.readAuthors.toString()}</h3>
            <span>Autores lidos</span>
          </IconBoxDetails>
        </IconBox>
        <IconBox>
          <BookmarkSimple size={32} />
          <IconBoxDetails>
            <h3>{profile.mostReadCategory}</h3>
            <span>Categoria mais lida</span>
          </IconBoxDetails>
        </IconBox>
      </ProfileContainerBottom>
    </ProfileContainer>
  )
}
