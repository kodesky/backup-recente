import React from 'react'

import { Container } from '../styles'
import { Content } from '../styles/components/Header'

import logoSrc from '../assets/logo-white.png'

function Header() {
  return (
    <Content>
      <Container>
        <img src={logoSrc} alt="Kodesky - Logo" />
        {/* <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Características</a>
          </li>
          <li>
            <a href="#">Portfólio</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
        <button>Fazer orçamento</button> */}
      </Container>
    </Content>
  )
}

export default Header
