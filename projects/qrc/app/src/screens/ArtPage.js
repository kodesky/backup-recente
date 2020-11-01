import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import MapView, { Marker } from 'react-native-maps'
import { Dimensions, Share } from 'react-native'

import {
  Container,
  Image,
  ImageHeader,
  Button,
  ArtInfo,
  ArtInfoHeader,
  ImageProfile,
  ArtInfoAbout,
  Title,
  Subtitle,
  ArtInfoDescription,
  ArtInfoButtons,
  InfoButton,
  InfoButtonLabel,
  MoreArts,
  MoreArtsTitle
} from '../styles/pages/ArtPage'
import PinchImage from '../components/PinchImage'

const deviceWidth = Dimensions.get('window').width

const ArtPage = ({ navigation, route }) => {
  const {
    url,
    dimensions: { width, height }
  } = route.params

  const [size, setSize] = useState({ width: 0, height: 0 })
  const [liked, setLiked] = useState(false)
  const [showButtons, setShowButtons] = useState(true)

  const onShare = async () => {
    try {
      const result = await Share.share({
        url,
        title: 'Lorem Ipsum Sit Dolor',
        message:
          'Dá uma olhada nessa arte nessa arte!! https://qrculture.com.br/arte/'
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          alert('Compartilhado')
        } else {
          alert('Compartilhado')
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }

  React.useEffect(() => {
    setSize({
      width: deviceWidth.toFixed(2),
      height: ((deviceWidth * height) / width).toFixed(2)
    })

    return () => setSize({ width: 0, height: 0 })
  }, [])

  return (
    <Container>
      {size.width !== 0 && (
        <Image>
          {showButtons && (
            <ImageHeader>
              <Button onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" color="#000" size={28} />
              </Button>
              <Button>
                <Icon name="more-vertical" color="#000" size={28} />
              </Button>
            </ImageHeader>
          )}
          <PinchImage
            size={size}
            uri={url}
            onZoomIn={() => setShowButtons(false)}
            onZoomOut={() => setShowButtons(true)}
          />
        </Image>
      )}
      <ArtInfo>
        <ArtInfoHeader>
          <ImageProfile source={{ uri: 'https://i.imgur.com/clDFurG.jpg' }} />
          <ArtInfoAbout>
            <Title>Lorem Ipsum Dolor</Title>
            <Subtitle>publicado há 5 dias</Subtitle>
          </ArtInfoAbout>
        </ArtInfoHeader>
        <ArtInfoDescription>
          Lorem Ipsum Dolor Sit Amet Put, Lorem Ipsum Dolor Sit Amet Put, Lorem
          Ipsum Dolor Sit Amet Put
        </ArtInfoDescription>
        <ArtInfoButtons>
          <InfoButton onPress={() => setLiked(!liked)}>
            <Icon name="heart" color={liked ? 'tomato' : '#000'} size={28} />
            <InfoButtonLabel>{liked ? '6' : '5'} curtidas</InfoButtonLabel>
          </InfoButton>
          <InfoButton style={{ marginLeft: 'auto' }}>
            <Icon name="bookmark" color="#000" size={28} />
          </InfoButton>
          <InfoButton>
            <Icon name="send" color="#000" size={28} />
          </InfoButton>
          <InfoButton onPress={onShare}>
            <Icon name="share" color="#000" size={28} />
          </InfoButton>
        </ArtInfoButtons>
      </ArtInfo>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        pitchEnabled={false}
        style={{
          width: Dimensions.get('window').width,
          height: 150
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
          title="Lorem Ipsum Dolor"
          description="Lorem Ipsum Dolor Sit Amet Put, Lorem Ipsum Dolor Sit Amet Put, Lorem Ipsum Dolor Sit Amet Put"
        />
      </MapView>
      <MoreArts>
        <MoreArtsTitle>você pode gostar...</MoreArtsTitle>
      </MoreArts>
    </Container>
  )
}

export default ArtPage
