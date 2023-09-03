import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { IconButton } from 'react-native-paper'
import Title from '../Title/Title'
import { TitleIconView } from './TitleIcon.styles'

interface Props {
	title?: string
	onPress?: () => void
}
const TitleIcon = ({ title, onPress }: Props) => {
	const navigation = useNavigation()
	return (
		<TitleIconView>
			<IconButton
				icon="arrow-left"
				iconColor={'#412dc4'}
				size={20}
				onPress={onPress ? onPress : () => navigation.goBack()}
			/>
			<Title title={title} />
		</TitleIconView>
	)
}

export default TitleIcon
