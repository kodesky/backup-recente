import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'

import {
  Container,
  Image,
  User,
  UserProfile,
  UserName
} from '../styles/components/AppPreview'

const ArtPreview = ({
  data: { id, author, dimensions },
  source: { uri },
  style: { width, height, margin }
}) => {
  const navigation = useNavigation()

  return (
    <Container
      margin={margin}
      onPress={() =>
        navigation.navigate('ArtPage', { id, url: uri, dimensions })
      }
    >
      <SharedElement id={`item.${id}.photo`}>
        <Image source={{ uri }} width={width} height={height} />
      </SharedElement>
      <User>
        <UserProfile />
        <UserName>{author}</UserName>
      </User>
    </Container>
  )
}

export default ArtPreview
