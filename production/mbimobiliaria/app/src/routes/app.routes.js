import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

import Home from "../screens/Home";
import NavigatorStack from './navigator.routes'

function AppStack() {
  const Stack = createBottomTabNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Index"
      labeled={false}
      activeTintColor="rgb(255, 67, 1)"
      inactiveTintColor="#616161"
      lazy={true}
      tabBarOptions={{
        activeTintColor: "rgb(255, 67, 1)",
        showLabel: false,
        resetOnBlur: true,
        keyboardHidesTabBar: true,
        style: {
          height: 56,
          borderTopWidth: 0,
        },
      }}
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Stack.Screen
        name="Index"
        options={({ route }) => {
          var index = 0;

          if (route.state) {
            index = route.state.index
          } 

          return {
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={24} />
            ),
            tabBarVisible: index === 0
          }
        }}
        component={NavigatorStack}
      />
      <Stack.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="grid" color={color} size={24} />
          ),
        }}
        component={Home}
      />
      <Stack.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={24} />
          ),
        }}
        component={Home}
      />
      <Stack.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={24} />
          ),
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
