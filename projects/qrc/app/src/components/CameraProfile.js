import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import {
  Container,
  View,
  CloseButton,
  Content,
  ImageProfile,
  Name,
  Category,
  Description,
  Features,
  Feature,
  FeatureCount,
  FeatureName,
  Button,
  ButtonLabel
} from '../styles/components/CameraProfile'

const CameraProfile = ({ visible, onClose }) => {
  return (
    <Container visible={visible}>
      <View>
        <CloseButton onPress={onClose}>
          <Icon name="x" color="#fff" size={26}></Icon>
        </CloseButton>
        <Content>
          <ImageProfile
            source={{ uri: 'https://i.imgur.com/clDFurG.jpg' }}
          />
          <Name>João Pedro Machado</Name>
          <Category>Artista de Rua</Category>
          <Description>Lorem Ipsum Dolor Sit Amet Put, Lorem Ipsum Dolor Sit Amet Put</Description>
          <Features>
            <Feature>
              <FeatureCount>526</FeatureCount>
              <FeatureName>Seguidores</FeatureName>
            </Feature>
            <Feature>
              <FeatureCount>3.6k</FeatureCount>
              <FeatureName>Favoritos</FeatureName>
            </Feature>
            <Feature>
              <FeatureCount>18</FeatureCount>
              <FeatureName>Publicações</FeatureName>
            </Feature>
          </Features>
          <Button>
            <ButtonLabel>visitar perfil</ButtonLabel>
          </Button>
        </Content>
      </View>
    </Container>
  )
}

export default CameraProfile
