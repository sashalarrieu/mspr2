import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import LogInScreen from '../components/screens/LogInScreen/LogInScreen'
// import QRCodeScreen from '../components/screens/QRCodeScreen/QRCodeScreen'
import SignUpScreen from '../components/screens/SignUpScreen/SignUpScreen'
import WelcommeScreen from '../components/screens/WelcommeScreen/WelcommeScreen'

const AuthStack = createStackNavigator()

const AuthStackNavigator = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				cardStyle: { backgroundColor: '#FFFFFF' },
			}}
			initialRouteName="Bienvenue"
		>
			<AuthStack.Screen
				options={{ headerStyle: styles.headerStyle }}
				name="Bienvenue"
				component={WelcommeScreen}
			/>
			<AuthStack.Screen
				options={{ headerStyle: styles.headerStyle }}
				name="Connexion"
				component={LogInScreen}
			/>
			<AuthStack.Screen
				options={{ headerStyle: styles.headerStyle }}
				name="Inscription"
				component={SignUpScreen}
			/>
			{/* <AuthStack.Screen
				options={{ headerStyle: styles.headerStyle }}
				name="QRCode"
				component={QRCodeScreen}
			/> */}
			{/* <AuthStack.Screen
				options={{ headerStyle: styles.headerStyle }}
				name="ResetPassword"
				component={ResetPasswordScreen}
			/> */}
		</AuthStack.Navigator>
	)
}

const styles = StyleSheet.create({
	headerStyle: {
		borderBottomWidth: 0,
		shadowColor: 'transparent',
		shadowOpacity: 0,
		elevation: 0, // remove shadow on Android
	},
})

export default AuthStackNavigator
