import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 360px;
  border-bottom-left-radius: 31px;
  border-bottom-right-radius: 31px;
`

export const ProfilePicture = styled.ImageBackground.attrs({
  resizeMode: 'contain',
  imageStyle: {
    borderRadius: 42
  }
})`
  width: 110px;
  height: 110px;
  margin-bottom: 15px;
`

export const ProfileName = styled.Text`
  font-size: 20px;
  font-weight: 800;
`

export const ProfileDescription = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #616161;
  margin-bottom: 15px;
`

export const Informations = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Information = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
`

export const InformationValue = styled.Text`
  font-size: 24px;
  font-weight: 600;
`

export const InformationName = styled.Text`
  font-size: 16px;
  color: #616161;
`
