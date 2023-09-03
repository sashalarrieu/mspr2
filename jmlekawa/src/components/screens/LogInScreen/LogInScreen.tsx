import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useState } from 'react'
import { Alert } from 'react-native'
import { TextInput } from 'react-native-paper'
import {
	AccountType,
	ActionContext,
	ConnectedAccountType,
} from '../../../../ActionContext'
import { getCustomers } from '../../../services/MockDataAPIFK'
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

		const account = verifyAccount(email)

		setConnectedAccount(account)
	}

	function verifyAccount(email: string): ConnectedAccountType {
		const listCustomers: AccountType[] = getCustomers()
		console.log(listCustomers)
		const foundAccount = listCustomers.find(
			(account) => account.email === email,
		)

		if (foundAccount) {
			return foundAccount
		} else {
			Alert.alert(
				'',
				"Le compte n'existe pas, vous pouvez toujours le créer",
				[
					{
						text: 'Inscription',
						onPress: () => {
							navigation.navigate('Inscription')
						},
						style: 'cancel',
					},
					{ text: 'Retour' },
				],
			)
			return undefined
		}
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
