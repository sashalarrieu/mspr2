import * as React from 'react'
import { ScrollView, TouchableHighlight } from 'react-native'
import { Card, Text } from 'react-native-paper'
import {
	ActionContext,
	ProductPageType,
	ProductType,
} from '../../../../../ActionContext'
import { getProducts } from '../../../../services/MockDataAPIFK'
import Title from '../../../common/Title/Title'
import { ProductCard, ProductPrice } from './Products.styles'

interface Props {
	setCurrentProductPage: React.Dispatch<React.SetStateAction<ProductPageType>>
}

const Products = ({ setCurrentProductPage }: Props) => {
	const { setCurrentProduct } = React.useContext(ActionContext)

	const products: ProductType[] = getProducts()

	const handleOnPressProduct = (idProduct: string) => {
		setCurrentProduct(idProduct)
		setCurrentProductPage('Product')
	}

	return (
		<ScrollView>
			<Title title={'Produits'} />
			{products.map((product: ProductType, index: number) => (
				<ProductCard key={index}>
					<TouchableHighlight
						onPress={() => handleOnPressProduct(product.id)}
					>
						<Card.Content>
							<Text variant="titleLarge">{product.name}</Text>
							<ProductPrice>
								Prix : {product.price} €
							</ProductPrice>
						</Card.Content>
					</TouchableHighlight>
				</ProductCard>
			))}
		</ScrollView>
	)
}

export default Products
