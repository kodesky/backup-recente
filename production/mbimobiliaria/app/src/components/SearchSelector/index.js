import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Item, Icon, Title } from "./styles";

const SearchSelector = () => {
  const navigation = useNavigation()

  const actions = [
    {
      title: "Quero alugar",
      icon: "briefcase",
      route: "Filters",
      params: { type: "RENT" },
    },
    {
      title: "Quero comprar",
      icon: "key",
      route: "Filters",
      params: { type: "BUY" },
    },
    {
      title: "Quero anunciar",
      icon: "trending-up",
      route: "Trend",
      params: {},
    },
    {
      title: "Meus favoritos",
      icon: "heart",
      route: "Favorites",
      params: {},
    },
  ];

  return (
    <Container>
      {actions.map((el, idx) => (
        <Item
          key={idx}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}
          onPress={() => navigation.push(el.route, el.params)}
        >
          <Icon name={el.icon} />
          <Title>{el.title}</Title>
        </Item>
      ))}
    </Container>
  );
};

export default SearchSelector;
