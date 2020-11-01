import React from 'react'
import { FiEyeOff, FiEye } from 'react-icons/fi'

import { Container, TextInput, Left, Right } from '../styles/components/Input'

function Input({ inputProps, leftIcon, Icon, isPassword, value, onChange }) {
  const [show, setShow] = React.useState(isPassword ? false : true)

  return (
    <Container>
      {leftIcon && (
        <Left>
          <Icon />
        </Left>
      )}
      <TextInput
        {...inputProps}
        type={show ? 'text' : 'password'}
        value={value}
        onChange={e => {
          onChange(e.target.value)
        }}
        hasLeft={leftIcon}
        hasRight={isPassword}
      />
      {isPassword && (
        <Right>
          <button onClick={() => setShow(!show)}>
            {!show ? <FiEye /> : <FiEyeOff />}
          </button>
        </Right>
      )}
    </Container>
  )
}

export default Input
