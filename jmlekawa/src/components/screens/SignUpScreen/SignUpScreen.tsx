import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useState } from 'react'
import { Alert } from 'react-native'
import { TextInput } from 'react-native-paper'
// import { generateQRCode, sendEmail } from '../../../utils/utils'
import Button from '../../common/Button/Button'
import { SignUpView } from './SignUpScreen.styles'
import { ActionContext, accountTest } from '../../../../ActionContext'

const SignUpScreen = () => {
	const navigation = useNavigation()
	const { setConnectedAccount } =
		React.useContext(ActionContext)

	// const [firstName, setFirstName] = useState('')
	// const [lastName, setLastName] = useState('')
	// const [postalCode, setPostalCode] = useState('')
	// const [city, setCity] = useState('')
	// const [companyName, setCompanyName] = useState('')
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [hidePassword, setHidePassword] = useState(true)

	const validateEmail = (email: string) => {
		let reg =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return reg.test(String(email).toLowerCase()) ? true : false
	}

	const validateInputString = (text: string) => {
		let reg = /^([a-zA-Z]+)$/
		return reg.test(String(text).toLowerCase()) ? true : false
	}

	const validateInputText = (text: string) => {
		let reg = /^([a-zA-Z0-9]+)$/
		return reg.test(String(text).toLowerCase()) ? true : false
	}

	const togglePasswordVisibility = () => {
		setHidePassword(!hidePassword)
	}

	const handleOnPressInscription = () => {
		// if (!validateInputString(lastName?.trim())) {
		// 	Alert.alert('', "Le nom est invalide", [{ text: 'OK' }], {
		// 		cancelable: false,
		// 	})
		// 	return
		// }
		// if (!validateInputString(firstName?.trim())) {
		// 	Alert.alert('', "Le prénom est invalide", [{ text: 'OK' }], {
		// 		cancelable: false,
		// 	})
		// 	return
		// }
		if (!validateInputString(name?.trim())) {
			Alert.alert('', 'Le nom est invalide', [{ text: 'OK' }], {
				cancelable: false,
			})
			return
		}
		if (!validateEmail(email?.trim())) {
			Alert.alert('', "L'adresse mail est invalide", [{ text: 'OK' }], {
				cancelable: false,
			})
			return
		}
		// if (!validateInputText(postalCode?.trim())) {
		// 	Alert.alert('', "Le code postal est invalide", [{ text: 'OK' }], {
		// 		cancelable: false,
		// 	})
		// 	return
		// }
		// if (!validateInputString(city?.trim())) {
		// 	Alert.alert('', "La ville est invalide", [{ text: 'OK' }], {
		// 		cancelable: false,
		// 	})
		// 	return
		// }
		// if (!validateInputString(companyName?.trim())) {
		// 	Alert.alert('', "Le nom d'entreprise est invalide", [{ text: 'OK' }], {
		// 		cancelable: false,
		// 	})
		// 	return
		// }
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

		// const qrCodeImage = generateQRCode(email)
		// // Utilisation de la fonction sendEmail
		// // sendEmail(email, qrCodeImage)

		// const form = {
		// 	name,
		// 	email,
		// 	qrCodeImage,
		// }

		// sendEmail(form)

		// navigation.navigate('QRCode')

		setConnectedAccount(accountTest)
		navigation.reset({
			index: 0,
			routes: [{ name: 'MainStack' }],
		})

		// const newUser: UserType = {
		// 	password,
		// 	username: email,
		// 	firstName,
		// 	lastName,
		// 	address: {
		// 		postalCode,
		// 		city,
		// 	},
		// 	profile: {
		// 		firstName: '',
		// 		lastName: '',
		// 	},
		// 	company: {
		// 		companyName,
		// 	},
		// }

		// const newUser: UserType = {
		// 	name,
		// 	email,
		// 	password,
		// }

		// postData('/inscription', newUser)
	}

	return (
		<SignUpView>
			{/* <TextInput
				mode="outlined"
				label="Nom"
				value={lastName}
				onChangeText={(lastName) => setLastName(lastName)}
			/>
			<TextInput
				mode="outlined"
				label="Prénom"
				value={firstName}
				onChangeText={(firstName) => setFirstName(firstName)}
			/> */}
			<TextInput
				mode="outlined"
				label="Nom"
				value={name}
				onChangeText={(name) => setName(name)}
			/>
			<TextInput
				mode="outlined"
				label="Email"
				value={email}
				onChangeText={(email) => setEmail(email)}
			/>
			{/* <TextInput
				mode="outlined"
				label="Code Postal"
				value={postalCode}
				onChangeText={(postalCode) => setPostalCode(postalCode)}
			/>
			<TextInput
				mode="outlined"
				label="Ville"
				value={city}
				onChangeText={(city) => setCity(city)}
			/>
			<TextInput
				mode="outlined"
				label="Entreprise"
				value={companyName}
				onChangeText={(companyName) => setCompanyName(companyName)}
			/> */}
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
				text="Inscription"
				mode="contained"
				onPress={handleOnPressInscription}
			/>
		</SignUpView>
	)
}

export default SignUpScreen
