import * as React from 'react'
import { ButtonStyle } from './Button.styles'

interface Props {
	text: string
	mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal"
	onPress: () => any
}
const Button = ({ text, mode, onPress }: Props) => {
	return (
		<ButtonStyle mode={mode} onPress={onPress}>
			{text}
		</ButtonStyle>
	)
}

export default Button
