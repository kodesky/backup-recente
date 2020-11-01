import styled from "styled-components/native";
import { StatusBar } from "react-native";

import pixelRatio from "../../helpers/pixel-ratio";

export const Container = styled.ImageBackground.attrs({
  source: require("../../assets/images/bg.png"),
  resizeMode: "cover",
})`
  flex-direction: column;
  justify-content: space-between;
  padding: 45px 25px;
  padding-top: ${StatusBar.currentHeight + 15}px;
  height: ${pixelRatio.heightPercentageToDP("50%")}px;
`;

export const Logo = styled.Image.attrs({
  source: require("../../assets/images/logo-white.png"),
  resizeMode: "contain",
})`
  width: 80px;
  height: 80px;
`;

export const Welcome = styled.Text`
  font-size: 36px;
  line-height: 36px;
  font-family: ${({ bold }) =>
    bold ? "Montserrat_700Bold" : "Montserrat_400Regular"};
  color: #fff;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-family: "Montserrat_300Light";
  color: #fff;
`;

export const Pitch = styled.Text`
  font-size: 24px;
  font-family: "Montserrat_600SemiBold";
  color: #fff;
  margin-bottom: 20px;
`;
