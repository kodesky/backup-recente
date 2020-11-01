import Head from 'next/head'

import Menu from '*/Menu'
import Presentation from '*/Presentation'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Atlas Loja - O E-commerce Definitivo do Seu Servidor!</title>
        <link
          rel="icon"
          href="https://atlasplugins.com/static/media/logo.583822d0.png"
        />
      </Head>
      <Menu />
      <Presentation />
    </div>
  )
}
