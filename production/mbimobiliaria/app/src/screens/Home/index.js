import React from "react";
import { StatusBar } from "react-native";

import { Container } from "./styles";

import HomePresentation from "../../components/HomePresentation";
import SearchSelector from "../../components/SearchSelector";
import Recents from "../../components/Recents";

StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);

const Home = ({ navigation }) => {
  return (
    <Container>
      <HomePresentation />
      <SearchSelector />
      <Recents />
    </Container>
  );
};

export default Home;
