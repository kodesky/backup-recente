import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background: #fff;
  margin: ${props => props.margin}px;
  border-radius: 15px;
  margin-bottom: 15px;
`

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
  borderRadius: 15
})`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 15px;
`

export const User = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const UserProfile = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: #686868;
  margin-right: 5px;
`

export const UserName = styled.Text`
  font-size: 12px;
`

// widht = height
// width = x
