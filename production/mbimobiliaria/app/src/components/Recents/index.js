import React from "react";
import Icon from "react-native-vector-icons/Feather";

import {
  Container,
  Title,
  Scroller,
  Item,
  ItemOverlay,
  Address,
  Infos,
  City,
  CityText,
  Price,
} from "./styles";

const Recents = () => {
  return (
    <Container>
      <Title>Adicionados recentemente</Title>
      <Scroller>
        <Item image="https://i.pinimg.com/564x/09/d2/fa/09d2fa18e5ca267188734a144f78147b.jpg">
          <ItemOverlay>
            <Address>Centro</Address>
            <Infos>
              <City>
                <Icon color="#FFF" name="map-pin" size={20} />
                <CityText>Cataguases, MG</CityText>
              </City>
              <Price>R$750</Price>
            </Infos>
          </ItemOverlay>
        </Item>
        <Item image="https://i.pinimg.com/564x/a8/0a/ee/a80aee7f3827560bb6d101915cb7e64e.jpg">
          <ItemOverlay>
            <Address>Colinas</Address>
            <Infos>
              <City>
                <Icon color="#FFF" name="map-pin" size={20} />
                <CityText>Cataguases, MG</CityText>
              </City>
              <Price>R$1.800</Price>
            </Infos>
          </ItemOverlay>
        </Item>
      </Scroller>
    </Container>
  );
};

export default Recents;
