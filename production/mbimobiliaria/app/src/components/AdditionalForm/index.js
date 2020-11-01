import React from 'react';

import { Container, Label, Quantity, Button, ButtonLabel, QuantityText } from './styles';

const AdditionalForm = ({ label, quantity, onChange, minValue  }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Quantity>
        <Button disabled={quantity === minValue} onPress={() => onChange(quantity - 1)}>
          <ButtonLabel disabled={quantity === minValue}>-</ButtonLabel>
        </Button>
        <QuantityText>{quantity}</QuantityText>
        <Button onPress={() => onChange(quantity + 1)}>
          <ButtonLabel>+</ButtonLabel>
        </Button>
      </Quantity>
    </Container>
  );
}

export default AdditionalForm;