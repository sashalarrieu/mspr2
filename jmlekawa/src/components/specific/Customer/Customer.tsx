import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useContext } from 'react'
import { ScrollView, TouchableHighlight } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { ActionContext, OrderType } from '../../../../ActionContext'
import { totalPrix } from '../../../utils/utils'
import Title from '../../common/Title/Title'
import { CustomerCard, CustomerPrice } from './Customer.styles'

const Customer = () => {
	const { connectedAccount } = useContext(ActionContext)
	const navigation = useNavigation()

	const handleOnPressOrder = (order: OrderType, i: number) => {
		navigation.navigate('Order', { order, i })
	}

	return (
		<ScrollView>
			<Title title={connectedAccount?.name} />
			{connectedAccount?.orders.map((order: OrderType, i: number) => (
				<CustomerCard key={i}>
					<TouchableHighlight
						onPress={() => handleOnPressOrder(order, i)}
					>
						<Card.Content>
							<Text variant="titleLarge">Panier {order.id}</Text>
							<Text variant="bodyMedium">
								Ce panier contient {order.products.length} article
								{order.products.length > 1 && 's'}
							</Text>
							<CustomerPrice>
								Total Prix : {totalPrix(order)} €
							</CustomerPrice>
						</Card.Content>
					</TouchableHighlight>
				</CustomerCard>
			))}
		</ScrollView>
	)
}

export default Customer
