import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { useEffect } from 'react'
import { IconButton } from 'react-native-paper'
import { ActionContext } from '../../ActionContext'
import HomeScreen from '../components/screens/HomeScreen/HomeScreen'

const MainStack = createStackNavigator()
const MainStackNavigator = () => {
	const { connectedAccount, setConnectedAccount } =
		React.useContext(ActionContext)
	const navigation = useNavigation()

	useEffect(() => {
		if (!connectedAccount) {
			navigation.reset({
				index: 0,
				routes: [{ name: 'AuthStack' }],
			})
		}
	}, [connectedAccount, navigation])

	const handleOnPressRightButton = () => {
		setConnectedAccount(undefined)
		navigation.reset({
			index: 0,
			routes: [{ name: 'AuthStack' }],
		})
	}

	return (
		<MainStack.Navigator
			screenOptions={{
				cardStyle: { backgroundColor: '#FFFFFF' },
				headerRight: () => (
					<IconButton
						icon="power"
						iconColor={'#412dc4'}
						size={20}
						onPress={handleOnPressRightButton}
					/>
				),
			}}
			initialRouteName="Accueil"
		>
			<MainStack.Screen name="Accueil" component={HomeScreen} />
		</MainStack.Navigator>
	)
}

export default MainStackNavigator
