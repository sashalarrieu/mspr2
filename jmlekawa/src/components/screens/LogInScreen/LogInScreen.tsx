import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useState } from 'react'
import { Alert } from 'react-native'
import { TextInput } from 'react-native-paper'
import { ActionContext, accountTest } from '../../../../ActionContext'
import Button from '../../common/Button/Button'
import { LogInView } from './LogInScreen.styles'

const LogInScreen = () => {
	const navigation = useNavigation()
	const { setConnectedAccount } = React.useContext(ActionContext)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [hidePassword, setHidePassword] = useState(true)

	const validateEmail = (email: string) => {
		let reg =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return reg.test(String(email).toLowerCase()) ? true : false
	}

	const togglePasswordVisibility = () => {
		setHidePassword(!hidePassword)
	}

	const handleOnPressConnexion = () => {
		if (!validateEmail(email?.trim())) {
			Alert.alert('', "L'adresse mail est invalide", [{ text: 'OK' }], {
				cancelable: false,
			})
			return
		}

		if (password?.trim() == '') {
			Alert.alert(
				'',
				'Le mot de passe doit être saisie',
				[{ text: 'OK' }],
				{
					cancelable: false,
				},
			)
			return
		}

		// navigation.navigate('MainStack', {screen: 'Bienvenue'} )
		setConnectedAccount(accountTest)

		navigation.reset({
			index: 0,
			routes: [{ name: 'MainStack' }],
		})
	}

	return (
		<LogInView>
			<TextInput
				mode="outlined"
				label="Email"
				value={email}
				onChangeText={(email) => setEmail(email)}
			/>
			<TextInput
				mode="outlined"
				label="Password"
				value={password}
				secureTextEntry={hidePassword}
				right={
					<TextInput.Icon
						icon={hidePassword ? 'eye-off' : 'eye'}
						onPress={togglePasswordVisibility}
					/>
				}
				onChangeText={(password) => setPassword(password)}
			/>
			<Button
				text="Connexion"
				mode="contained"
				onPress={handleOnPressConnexion}
			/>
		</LogInView>
	)
}

export default LogInScreen
