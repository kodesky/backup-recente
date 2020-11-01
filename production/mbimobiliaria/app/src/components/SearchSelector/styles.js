import styled from "styled-components/native";
import FiIcon from "react-native-vector-icons/Feather";

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 25,
    paddingRight: 15,
  },
})`
  margin-top: -35px;
  height: 160px;
`;

export const Item = styled.TouchableOpacity`
  width: 120px;
  height: 140px;
  background: #fff;
  border-radius: 3px;
  padding: 20px;
  margin-right: 10px;
  justify-content: space-between;
`;

export const Icon = styled(FiIcon).attrs({
  size: 38,
  color: "rgb(255, 67, 1)",
})``;

export const Title = styled.Text`
  font-family: "Montserrat_500Medium";
  font-size: 16px;
  line-height: 17px;
`;
