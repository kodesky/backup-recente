/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Feather'

import Home from '../screens/Home'
import Filters from '../screens/Filters'

const BackButton = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 10 }}>
      <Icon name="chevron-left" color="rgb(255, 67, 1)" size={26} />
    </TouchableOpacity>
  )
}

function NavigatorStack () {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName="NavigatorIndex"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0
        },
        headerTitleStyle: {
          fontFamily: 'Montserrat_300Light',
          color: '#000'
        },
        headerLeft: ({ goBack }) => <BackButton goBack={goBack} />
      }}
      mode="card"
    >
      <Stack.Screen
        name="NavigatorIndex"
        options={{
          headerShown: false
        }}
        component={Home}
      />
      <Stack.Screen
        name="Filters"
        component={Filters}
        options={{
          title: 'FILTRE SUA BUSCA'
        }}
      />
    </Stack.Navigator>
  )
}

export default NavigatorStack
