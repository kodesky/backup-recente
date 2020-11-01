import React from 'react'
import { BiMobileAlt, BiDesktop, BiAtom } from 'react-icons/bi'

import { Container } from '../styles'
import { Content, Item } from '../styles/components/Features'

function Features() {
  const [hoverabled, setHoverabled] = React.useState('first')

  return (
    <Content>
      <Container>
        <Item
          active={hoverabled === 'first'}
          onMouseEnter={() => setHoverabled('first')}
        >
          <BiDesktop />
          <h5>Sites & Landing Pages</h5>
          <p>
            Desenvolvemos um site de acordo com seu projeto / sua empresa. Nada
            de usar templates prontos, aqui focamos agregar valor ao seu negócio
            e seu cliente notará isso.
          </p>
        </Item>
        <Item
          active={hoverabled === 'second'}
          onMouseEnter={() => setHoverabled('second')}
        >
          <BiMobileAlt />
          <h5>Aplicativos Mobile</h5>
          <p>
            Seu negócio precisa acompanhar o novo mundo! Um aplicativo é a porta
            de entrada para seu cliente ter sua empresa na palma da mão. Esteja
            presente em todos lugares
          </p>
        </Item>
        <Item
          active={hoverabled === 'third'}
          onMouseEnter={() => setHoverabled('third')}
        >
          <BiAtom />
          <h5>Sistemas Inteligentes</h5>
          <p>
            Precisando automatizar suas tarefas, ou aumentar a produtividade da
            sua equipe? Vamos montar o sistema ideal para que isso aconteça
            estudando sua real necessidade.
          </p>
        </Item>
      </Container>
    </Content>
  )
}

export default Features
