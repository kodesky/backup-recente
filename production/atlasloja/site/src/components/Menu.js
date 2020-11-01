import React from 'react'

import { Container } from '~/styles'
import { Content, Logo, Links, Buttons } from '#/components/Menu'

function Menu() {
  return (
    <Container>
      <Content>
        <Logo />
        <Links>
          <li className="active">
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Características</a>
          </li>
          <li>
            <a href="#">Nossos planos</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Helpdesk</a>
          </li>
        </Links>
        <Buttons>
          <button>Iniciar agora</button>
          <button>PT-BR</button>
        </Buttons>
      </Content>
    </Container>
  )
}

export default Menu
