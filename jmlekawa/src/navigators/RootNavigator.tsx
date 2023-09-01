import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import MainStackNavigator from './MainStackNavigator'
import AuthStackNavigator from './AuthStackNavigator'

const Root = createStackNavigator()
const RootNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
      initialRouteName="MainStack">
      <Root.Screen name="AuthStack" component={AuthStackNavigator} />
      <Root.Screen name="MainStack" component={MainStackNavigator} />
    </Root.Navigator>
  )
}

export default RootNavigator

// navigation.navigate('LoginStack', {
//   screen: 'Signup',
// })

// ou

// navigation.navigate('LoginStack')