import styled from "styled-components/native";

export const Container = styled.View`
  padding: 5px 0;
  padding-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: "Montserrat_500Medium";
  color: #616161;
  margin-left: 25px;
  margin-bottom: 10px;
`;

export const Scroller = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 25,
    paddingRight: 15,
  },
})``;

export const Item = styled.ImageBackground.attrs(({ image }) => ({
  source: {
    uri: image,
  },
  resizeMode: "cover",
  imageStyle: {
    borderRadius: 10,
  },
}))`
  width: 260px;
  height: 305px;
  border-radius: 10px;
  margin-right: 15px;
`;

export const ItemOverlay = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  padding: 25px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

export const Address = styled.Text`
  color: #fff;
  font-size: 32px;
  font-family: "Montserrat_700Bold";
`;

export const Infos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const City = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CityText = styled.Text`
  color: #fff;
  margin-left: 5px;
  font-family: "Montserrat_400Regular";
`;

export const Price = styled.Text`
  color: #fff;
  font-family: "Montserrat_500Medium";
`;
