import * as React from 'react'
import { View } from 'react-native'
import { ProductPageType } from '../../../../ActionContext'
import Product from './Products/Product/Product'
import Products from './Products/Products'

const ProductsNavigation = () => {
	const [currentProductPage, setCurrentProductPage] =
		React.useState<ProductPageType>('Products')

	return (
		<View>
			{currentProductPage === 'Products' && (
				<Products setCurrentProductPage={setCurrentProductPage} />
			)}
			{currentProductPage === 'Product' && (
				<Product setCurrentProductPage={setCurrentProductPage} />
			)}
		</View>
	)
}

export default ProductsNavigation
