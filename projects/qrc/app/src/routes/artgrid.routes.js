import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Feather'

import Home from '../screens/Home'
import ArtPage from '../screens/ArtPage'
import Camera from '../screens/Camera'

const Stack = createStackNavigator()

function ArtgridStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          backgroundColor: '#EDF1F4'
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: 'QRCulture',
          headerTitleStyle: {
            textTransform: 'uppercase',
            fontSize: 18,
            paddingLeft: 5
          },
          headerTitleAlign: 'left',
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => navigation.push('Camera')}
              >
                <Icon name="maximize" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          )
        })}
      />
      <Stack.Screen
        name="ArtPage"
        component={ArtPage}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default ArtgridStack
