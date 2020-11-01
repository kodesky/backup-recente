import React from 'react'

import { Container } from '~/styles'
import {
  Content,
  H1,
  H2,
  Button,
  Scroller,
  Renders
} from '#/components/Presentation'

import artSrc from '!/images/render-art.png'
import steveSrc from '!/images/render-steve.png'
import scrollSrc from '!/images/scroll-bottom.gif'

function Presentation() {
  return (
    <Container>
      <Content>
        <H1>
          Seu servidor <br />
          precisa de nós <br />
          para alcançar o <br />
          próximo nível
        </H1>
        <H2>
          Você terá 7 dias para se apaixonar por nós <br />e ver que Atlas Loja
          é a melhor solução e-commerce <br /> para o seu servidor alcançar o
          sucesso.
        </H2>
        <Button>Começar agora</Button>
        <Scroller>
          <img src={scrollSrc} alt="Atlas Loja - Scroller" />
        </Scroller>

        <Renders>
          <img src={artSrc} alt="Atlas Loja" />
          <img src={steveSrc} alt="Atlas Loja" />
        </Renders>
      </Content>
    </Container>
  )
}

export default Presentation
