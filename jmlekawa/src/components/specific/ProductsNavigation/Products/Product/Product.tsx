import * as React from 'react'
import { Text, View } from 'react-native'
import {
	ActionContext,
	ProductPageType,
	ProductType,
} from '../../../../../../ActionContext'
import { getProductByID } from '../../../../../services/MockDataAPIFK'
import TitleIcon from '../../../../common/TitleIcon/TitleIcon'

interface Props {
	setCurrentProductPage: React.Dispatch<React.SetStateAction<ProductPageType>>
}

const Product = ({ setCurrentProductPage }: Props) => {
	const { currentProduct } = React.useContext(ActionContext)

	const product: ProductType | undefined = getProductByID(currentProduct)

	const handleOnPressProduct = () => {
		setCurrentProductPage('Products')
	}

	return (
		product && (
			<View>
				<TitleIcon
					title={product.name}
					onPress={handleOnPressProduct}
				/>
				<Text>Prix : {product.price} €</Text>
			</View>
		)
	)
}

export default Product
