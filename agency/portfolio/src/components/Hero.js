import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import { Container } from '../styles'
import { Content, Flex } from '../styles/components/Hero'

function Hero() {
  function sendMessage() {
    let number = '5532998090286'
    let msg = 'Olá, gostaria de fazer um orçamento!'

    let target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      number
    )}&text=${encodeURIComponent(msg)}`

    window.open(target, '_blank')
  }

  return (
    <Content>
      <Container>
        <p>Desenvolvimento de softwares inteligentes</p>
        <h1>
          Sua empresa para o <br />
          próximo nível
        </h1>
        <h2>
          Nosso site está passando por algumas mudanças e atualizações. <br />
          Chame-nos no WhatsApp para fazermos um orçamento
        </h2>
        <Flex>
          {/* <form>
            <input placeholder="Deixe-nos saber mais sobre seu projeto!" />
            <button>me liga!</button>
          </form> */}
          <button onClick={sendMessage}>
            <AiOutlineWhatsApp />
            Fazer um orçamento
          </button>
        </Flex>
      </Container>
    </Content>
  )
}

export default Hero
