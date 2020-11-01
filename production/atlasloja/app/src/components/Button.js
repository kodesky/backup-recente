import React from 'react'

import { Container } from '../styles/components/Button'

function Button({ children, backgroundColor, color }) {
  return (
    <Container backgroundColor={backgroundColor} color={color}>
      {children}
    </Container>
  )
}

export default Button
