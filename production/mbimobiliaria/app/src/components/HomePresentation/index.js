import React from "react";
import { View } from "react-native";

import { Container, Logo, Welcome, Subtitle, Pitch } from "./styles";

const HomePresentation = () => {
  return (
    <Container>
      <Logo />
      <View>
        <Welcome>Olá,</Welcome>
        <Welcome bold>Visitante</Welcome>
        <Subtitle>Tenha um ótimo dia</Subtitle>
      </View>
      <Pitch>O que deseja fazer?</Pitch>
    </Container>
  );
};

export default HomePresentation;
