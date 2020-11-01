import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`

export const Image = styled.View`
  position: relative;
`

export const ImageHeader = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  margin-top: 60px;

  z-index: 999;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`

export const ArtInfo = styled.View`
  padding: 25px 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: -25px;
  background: #fff;
`

export const ArtInfoHeader = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
`

export const ImageProfile = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 45
  }
})`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  margin-right: 15px;
`

export const ArtInfoAbout = styled.View``

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
`

export const Subtitle = styled.Text`
  font-size: 12px;
  color: #616161;
`

export const ArtInfoDescription = styled.Text`
  margin-bottom: 25px;
`

export const ArtInfoButtons = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const InfoButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 15px;
`

export const InfoButtonLabel = styled.Text`
  margin-left: 10px;
`

export const MoreArts = styled.View`
  background-color: #fff;
  padding: 25px 15px;
  height: 300px;
`

export const MoreArtsTitle = styled.Text`
  font-size: 22px;
  font-weight: 300;
`
