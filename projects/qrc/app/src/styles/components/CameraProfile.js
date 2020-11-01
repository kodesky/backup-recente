import styled from 'styled-components/native'

export const Container = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true
})`
  flex: 1;
`

export const View = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background: rgba(0, 0, 0, .6);
`

export const CloseButton = styled.TouchableOpacity`
  padding: 15px 35px;
`

export const Content = styled.View`
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  width: 100%;
  height: 48%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 20px;
`

export const ImageProfile = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  imageStyle: {
    borderRadius: 140,
    borderWidth: 4,
    borderColor: '#fff'
  }
})`
  position: absolute;
  top: -70px;
  left: 38%;
  border-radius: 140px;
  height: 140px;
  width: 140px;
`

export const Name = styled.Text`
  padding-top: 60px;
  font-size: 28px;
  font-weight: 800;
`

export const Category = styled.Text`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
`

export const Description = styled.Text`
  padding: 15px 0;
  max-width: 70%;
  text-align: center;
`

export const Features = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Feature = styled.View`
  width: 25%;
`

export const FeatureCount = styled.Text`
  text-align: center;
  font-size: 26px;
  font-weight: 600;
`

export const FeatureName = styled.Text`
  text-align: center;
  font-weight: 300;
`

export const Button = styled.TouchableOpacity`
  padding: 15px 35px;
  border-radius: 25px;
  background: #000;
  margin-top: 20px;
`

export const ButtonLabel = styled.Text`
  color: #fff;
`
