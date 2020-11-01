import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #FFF;
  padding: 10px 25px;
`;

export const Form = styled.View`
  margin-bottom: 10px;
`

export const FormLabel = styled.Text`
  font-family: 'Montserrat_400Regular';
  font-size: 16px;
  margin-bottom: 5px;
`

export const FormInput = styled.TextInput`
  background: rgba(0, 0, 0, 0.03);
  height: 50px;
  padding: 0 10px;
  font-family: 'Montserrat_400Regular';
`

export const FormSeparator = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat_600SemiBold';
  margin: 15px 0;
`