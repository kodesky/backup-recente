import React, { useState } from 'react';
import { Picker } from 'react-native';
import Rheostat from "react-native-rheostat";

import { Container, Form, FormLabel, FormInput, FormSeparator } from './styles';

import AdditionalForm from '../../components/AdditionalForm'

const Filters = () => {
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [type, setType] = useState('apartamento')

  const [bedrooms, setBedrooms] = useState(1)
  const [bathrooms, setBathrooms] = useState(1)
  const [garage, setGarage] = useState(1)

  const [price, setPrice] = useState([600, 950])

  React.useEffect(() => {
    setTimeout(() => {
      setPrice([500, 1000])
    }, 1000)
  }, [])

  return (
    <Container>
      <FormSeparator>
        Localidade
      </FormSeparator>
      <Form>
        <FormLabel>Cidade</FormLabel>
        <Picker
          selectedValue={city}
          style={{ height: 50, width: '100%', fontFamily: 'Montserrat_400Regular', backgroundColor: 'rgba(0, 0, 0, 0.03)', borderRadius: 5 }}
          onValueChange={(itemValue) =>
            setCity(itemValue)
          }
        >
          <Picker.Item label="Cataguases" value="cataguases" />
          <Picker.Item label="Muriaé" value="muriaé" />
          <Picker.Item label="Juiz de Fora" value="juiz de fora" />
        </Picker>
      </Form>
      <Form>
        <FormLabel>Endereço</FormLabel>
        <FormInput value={address} onChangeText={setAddress} />
      </Form>
      <Form>
        <FormLabel>Tipo</FormLabel>
        <Picker
          selectedValue={type}
          style={{ height: 50, width: '100%', fontFamily: 'Montserrat_400Regular', backgroundColor: 'rgba(0, 0, 0, 0.03)', borderRadius: 5 }}
          onValueChange={(itemValue) =>
            setType(itemValue)
          }
        >
          <Picker.Item label="Apartamento" value="apartamento" />
          <Picker.Item label="Cobertura" value="cobertura" />
        </Picker>
      </Form>
      <FormSeparator>
        Espaço
      </FormSeparator>
      <AdditionalForm label="Quartos" quantity={bedrooms} onChange={setBedrooms} minValue={1} />
      <AdditionalForm label="Banheiros" quantity={bathrooms} onChange={setBathrooms} minValue={1} />
      <AdditionalForm label="Vagas na garagem" quantity={garage} onChange={setGarage} minValue={0} />
      <FormSeparator>Faixa de Preço</FormSeparator>
      <Form style={{marginBottom: 25}}>
        <FormLabel>Entre R${price[0]} e R${price[1]}</FormLabel>
        <Rheostat 
          values={price}  
          min={0} 
          max={1440} 
          theme={{ rheostat: { themeColor: 'rgb(255, 67, 1)', grey: '#fafafa' } }} 
          onValuesUpdated={({ values }) => setPrice(values)}
        />
      </Form>
    </Container>
  );
}

export default Filters;