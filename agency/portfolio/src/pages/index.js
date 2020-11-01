import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'

export default function Home() {
  React.useEffect(() => {
    const $bigBall = document.querySelector('.cursor__ball--big')
    const $smallBall = document.querySelector('.cursor__ball--small')
    const $hoverables = document.querySelectorAll('.hoverable')

    document.body.addEventListener('mousemove', onMouseMove)
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover)
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut)
    }

    function onMouseMove(e) {
      TweenMax.to($bigBall, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15
      })
      TweenMax.to($smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7
      })
    }

    function onMouseHover() {
      TweenMax.to($bigBall, 0.3, {
        scale: 4
      })
    }
    function onMouseHoverOut() {
      TweenMax.to($bigBall, 0.3, {
        scale: 1
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>Kodesky - Agência Focada em Resultados</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      <Hero />
      <Features />
    </>
  )
}
