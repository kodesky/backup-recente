import React from 'react'
import { ImageBackground, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

import Home from '../screens/Home'
import Profile from '../screens/Profile'

import ArtgridStack from './artgrid.routes'

const DEVICE_WIDTH = Dimensions.get('window').width

function AppStack() {
  const Stack = createBottomTabNavigator()

  const ProfileImage = ({ withBorder }) => (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/clDFurG.jpg' }}
      resizeMode="cover"
      style={{
        width: 30,
        height: 30,
        borderRadius: 30
      }}
      imageStyle={{
        borderRadius: 30,
        borderWidth: 2,
        borderColor: withBorder ? '#000' : '#FFF'
      }}
    />
  )

  return (
    <Stack.Navigator
      initialRouteName="Index"
      labeled={false}
      activeTintColor="#000"
      inactiveTintColor="#616161"
      lazy={true}
      tabBarOptions={{
        activeTintColor: '#000',
        showLabel: false,
        resetOnBlur: true,
        keyboardHidesTabBar: true,
        style: {
          height: 56,
          borderTopWidth: 0,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          backgroundColor: '#FFF',
          position: 'absolute',
          bottom: 0,
          padding: 0,
          width: DEVICE_WIDTH,
          zIndex: 8
        }
      }}
      barStyle={{ backgroundColor: '#FFF' }}
    >
      <Stack.Screen
        name="Index"
        options={({ route }) => {
          var index = 0

          if (route.state) {
            index = route.state.index
          }

          return {
            tabBarVisible: index === 0,
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={24} />
            )
          }
        }}
        component={ArtgridStack}
      />
      <Stack.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={24} />
          )
        }}
        component={Home}
      />
      <Stack.Screen
        name="Publish"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="plus-square" color={color} size={24} />
          )
        }}
        component={Home}
      />
      <Stack.Screen
        name="Inbox"
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <Icon name="message-square" color={color} size={24} />
          )
        }}
        component={Home}
      />
      <Stack.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileImage withBorder={color === '#000'} />
          )
        }}
        component={Profile}
      />
    </Stack.Navigator>
  )
}

export default AppStack
