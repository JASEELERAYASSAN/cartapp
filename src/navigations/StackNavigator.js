import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import TabNavigator from './TabNavigator'


const Stack = createNativeStackNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} 
      />
      <Stack.Screen name='Home' component={TabNavigator}
      />


    </Stack.Navigator>
  )
}


export default StackNavigator

const styles = StyleSheet.create({})