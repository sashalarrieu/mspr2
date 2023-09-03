import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import CustomerStackNavigator from '../../../navigators/CustomerStackNavigator '
import ProductsNavigation from '../../specific/ProductsNavigation/ProductsNavigation'

const HomeScreen = () => {
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{
			key: 'customers',
			title: 'Compte',
			focusedIcon: 'account',
			unfocusedIcon: 'account-outline',
		},

		{
			key: 'products',
			title: 'Produits',
			focusedIcon: 'cart',
			unfocusedIcon: 'cart-outline',
		},
	])

	const renderScene = BottomNavigation.SceneMap({
		customers: CustomerStackNavigator,
		products: ProductsNavigation,
	})

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	)
}

export default HomeScreen
