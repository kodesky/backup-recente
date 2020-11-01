import React from 'react'

import {
  Container,
  ProfilePicture,
  ProfileName,
  ProfileDescription,
  Informations,
  Information,
  InformationName,
  InformationValue
} from '../styles/components/ProfileHeader'

const ProfileHeader = () => {
  return (
    <Container>
      <ProfilePicture
        source={{ uri: 'https://i.imgur.com/clDFurG.jpg' }}
      />
      <ProfileName>João Pedro Machado</ProfileName>
      <ProfileDescription>Artista de Rua de MG</ProfileDescription>
      <Informations>
        <Information>
          <InformationValue>63</InformationValue>
          <InformationName>Posts</InformationName>
        </Information>
        <Information>
          <InformationValue>189K</InformationValue>
          <InformationName>Seguidores</InformationName>
        </Information>
        <Information>
          <InformationValue>1.6M</InformationValue>
          <InformationName>Curtidas</InformationName>
        </Information>
      </Informations>
    </Container>
  )
}

export default ProfileHeader
