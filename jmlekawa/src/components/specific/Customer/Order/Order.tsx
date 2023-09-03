import { useNavigation, useRoute } from '@react-navigation/native'
import * as React from 'react'
import { ScrollView, TouchableHighlight } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { OrderType, ProductType } from '../../../../../ActionContext'
import TitleIcon from '../../../common/TitleIcon/TitleIcon'
import { OrderCard, OrderPrice } from './Order.styles'

const Order = () => {
	const navigation = useNavigation()
	const route = useRoute()
	const { order, i } = route.params
	const customerOrder: OrderType = order
	const numOrder: string = i + 1

	const handleOnPressProduct = (idProduct: string) => {
		navigation.navigate('Product', { idProduct })
	}

	return (
		<ScrollView>
			<TitleIcon title={'Panier ' + numOrder} />
			{customerOrder.products.map(
				(product: ProductType, index: number) => (
					<OrderCard key={index}>
						<TouchableHighlight
							onPress={() => handleOnPressProduct(product.id)}
						>
							<Card.Content>
								<Text variant="titleLarge">
									Produit {index + 1}
								</Text>
								<Text variant="bodyMedium">{product.name}</Text>
								<OrderPrice>
									Prix : {product.price} €
								</OrderPrice>
							</Card.Content>
						</TouchableHighlight>
					</OrderCard>
				),
			)}
		</ScrollView>
	)
}

export default Order
