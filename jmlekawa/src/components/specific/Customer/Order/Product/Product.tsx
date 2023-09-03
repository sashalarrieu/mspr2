import { useRoute } from '@react-navigation/native'
import * as React from 'react'
import { Text, View } from 'react-native'
import { ProductType } from '../../../../../../ActionContext'
import { getProductByID } from '../../../../../services/MockDataAPIFK'
import TitleIcon from '../../../../common/TitleIcon/TitleIcon'

const Product = () => {
	const route = useRoute()
	const { idProduct } = route.params
	const product: ProductType | undefined = getProductByID(idProduct)

	return (
		product && (
			<View>
				<TitleIcon title={product.name} />
				<Text>Prix : {product.price} €</Text>
			</View>
		)
	)
}

export default Product
