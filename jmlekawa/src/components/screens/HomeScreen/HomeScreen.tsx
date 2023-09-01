import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { ActionContext } from '../../../../ActionContext'

const HomeScreen = () => {
	const { connectedAccount } = useContext(ActionContext)
	const navigation = useNavigation()

	return (
		<>
			<View>
				<Text>Vous êtes bien authentifié {connectedAccount?.name} !</Text>
			</View>
		</>
	)
}

export default HomeScreen
