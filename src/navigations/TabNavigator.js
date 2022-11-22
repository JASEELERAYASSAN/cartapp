import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Cart from '../screens/Cart'
import Home from '../screens/Home'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialTopTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name='home' component={Home}
    options = {{
      tabBarShowLabel: false,
      tabBarIcon: ({focused})=>
      focused ? <Icon name = 'home' size={25} color = '#7d5fff'/> : <Icon name = 'home-outline' size={25} color = 'gray'/>
    }}/>
    <Tab.Screen name='Cart' component={Cart} 
    options = {{
      tabBarShowLabel: false,
      tabBarIcon: ({focused})=>
      focused ? <Icon name = 'cart' size={25} color = '#7d5fff'/> : <Icon name = 'cart-outline' size={25} color = 'gray'/>
    }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})