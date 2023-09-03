import { createContext, useState } from 'react'

// import { customers } from './src/services/MockDataAPIFK'
// const accountTest: AccountType = customers[0]

const accountTest: ConnectedAccountType = undefined

export const useActionContext = (): ActionContextType => {
	const [connectedAccount, setConnectedAccount] =
		useState<ConnectedAccountType>(accountTest)
	const [currentProduct, setCurrentProduct] = useState<string>('')

	return {
		connectedAccount,
		setConnectedAccount,
		currentProduct,
		setCurrentProduct,
	}
}

export interface AccountType {
	id: string
	name: string
	email: string
	orders: OrderType[]
}

export interface OrderType {
	id: string
	products: ProductType[]
}

export interface ProductType {
	id: string
	name: string
	price: string
}

export type ConnectedAccountType = AccountType | undefined

export type ProductPageType = 'Products' | 'Product'

interface ActionContextType {
	connectedAccount: ConnectedAccountType
	setConnectedAccount: (value: ConnectedAccountType) => void
	currentProduct: string
	setCurrentProduct: (value: string) => void
}

const actionContextStart = {
	connectedAccount: accountTest,
	setConnectedAccount: (value: ConnectedAccountType) => value,
	currentProduct: '',
	setCurrentProduct: (value: string) => value,
}

export const ActionContext =
	createContext<ActionContextType>(actionContextStart)
