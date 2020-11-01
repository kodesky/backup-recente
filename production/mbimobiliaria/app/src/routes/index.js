import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppRoute from './app.routes'

function Routes () {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  )
}

export default Routes
