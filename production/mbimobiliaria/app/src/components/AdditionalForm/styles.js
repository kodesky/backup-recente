import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`

export const Label = styled.Text`
  font-family: "Montserrat_500Medium";
  font-size: 16px;
`

export const Quantity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const Button = styled.TouchableOpacity`
  border: solid 1px ${({ disabled }) => disabled ? 'rgba(0, 0, 0, 0.2)' : '#000'};
  width: 35px;
  height: 35px;
  border-radius: 35px;
`

export const ButtonLabel = styled.Text`
  text-align: center;
  line-height: 32px;
  font-size: 24px;
  color: ${({ disabled }) => disabled ? 'rgba(0, 0, 0, 0.2)' : '#000'}
`

export const QuantityText = styled.Text`
  font-family: 'Montserrat_500Medium';
  width: 30px;
  text-align: center;
`
