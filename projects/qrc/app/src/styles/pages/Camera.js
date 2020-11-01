import styled from 'styled-components/native'
import { Camera } from 'expo-camera'

export const Container = styled.View`
  flex: 1;
`

export const Cam = styled(Camera)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 15px;
`

export const Tab = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.TouchableOpacity``

export const BigButton = styled.TouchableOpacity`
  width: 85px;
  height: 85px;
  background: #fff;
  border-radius: 85px;
  border: solid 3px rgba(0, 0, 0, 0.2);
`
