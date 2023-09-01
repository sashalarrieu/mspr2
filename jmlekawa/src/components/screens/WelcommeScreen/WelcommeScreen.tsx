import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Image } from 'react-native'
import { ActionContext } from '../../../../ActionContext'
import logo from '../../../assets/images/Paye-ton-kawa-logo.png'
import Button from '../../common/Button/Button'
import { WelcommeView } from './WelcommeScreen.styles'

const WelcommeScreen = () => {
	const { connectedAccount } = useContext(ActionContext)
	const navigation = useNavigation()

	useEffect(() => {
		if (connectedAccount) {
			navigation.reset({
				index: 0,
				routes: [{ name: 'MainStack' }],
			})
		}
	}, [connectedAccount, navigation])

	return (
		<WelcommeView>
			<Image source={logo} />
			<Button
				text="Connexion"
				mode="contained"
				onPress={() => navigation.navigate('Connexion')}
			/>
			<Button
				text="Inscription"
				mode="outlined"
				onPress={() => navigation.navigate('Inscription')}
			/>
		</WelcommeView>
	)
}

export default WelcommeScreen
