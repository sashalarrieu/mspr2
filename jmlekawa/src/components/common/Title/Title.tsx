import * as React from 'react'
import { TitleText } from './Title.styles'

interface Props {
	title: string
}
const Title = ({ title }: Props) => {
	return <TitleText>{title}</TitleText>
}

export default Title
