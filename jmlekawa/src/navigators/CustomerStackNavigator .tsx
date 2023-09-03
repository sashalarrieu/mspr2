import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Customer from '../components/specific/Customer/Customer'
import Order from '../components/specific/Customer/Order/Order'
import Product from '../components/specific/Customer/Order/Product/Product'

const CustomerStack = createStackNavigator()
const CustomerStackNavigator = () => {
	return (
		<CustomerStack.Navigator
			screenOptions={{
				cardStyle: { backgroundColor: '#FFFFFF' },
				headerShown: false,
			}}
			initialRouteName="Customer"
		>
			<CustomerStack.Screen name="Customer" component={Customer} />
			<CustomerStack.Screen name="Order" component={Order} />
			<CustomerStack.Screen name="Product" component={Product} />
		</CustomerStack.Navigator>
	)
}

export default CustomerStackNavigator
