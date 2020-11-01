import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import AppRoute from './app.routes'

function Routes() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      notification: 'black'
    }
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <AppRoute />
    </NavigationContainer>
  )
}

export default Routes
