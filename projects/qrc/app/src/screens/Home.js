import React from 'react'
import { StatusBar } from 'react-native'

import Masonry from '../components/Masonry'
import { Container } from '../styles/pages/Home'

StatusBar.setBarStyle('dark-content')

const Home = ({ navigation }) => {
  return (
    <Container>
      <Masonry />
    </Container>
  )
}

export default Home
